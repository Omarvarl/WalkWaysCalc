const ExcelJS = require('exceljs');

module.exports = async function makeExcel(data) {

    let wb= await new ExcelJS.Workbook();

    const keys = Object.keys(data)

    keys.forEach((key) => {
        let ws = wb.addWorksheet(key)

        ws.getCell('A1').value = 'Стеклопластик'
        ws.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' }  //  set text alignment
        ws.mergeCells(`A1:${(ws.name === 'Сводная') ? 'E1' : 'G1'}`)

        setWSData(ws, data[key]['fData'], 2, data[key].quantity, data[key].type)

        let rowIndex = Object.keys(data[key]['fData']).length + 1

        ws.getCell(`A${rowIndex + 3}`).value = 'Крепеж'
        ws.getCell(`A${rowIndex + 3}`).alignment = { vertical: 'middle', horizontal: 'center' }  //  set text alignment
        ws.mergeCells(`A${rowIndex + 3}:E${rowIndex + 3}`)

        setWSData(ws, data[key]['jData'], rowIndex + 4, data[key].quantity, data[key].type)

        rowIndex = Object.keys(data[key]['fData']).length + Object.keys(data[key]['jData']).length + 3

        ws.getCell(`A${rowIndex + 3}`).value = 'Соединительный крепеж'
        ws.getCell(`A${rowIndex + 3}`).alignment = { vertical: 'middle', horizontal: 'center' }  //  set text alignment
        ws.mergeCells(`A${rowIndex + 3}:E${rowIndex + 3}`)

        setWSData(ws, data[key]['cData'], rowIndex + 4, data[key].quantity, data[key].type)

        setLength(ws)
    })

    await wb.xlsx.writeFile(`./temp/Table.xlsx`)

    return `temp/Table.xlsx`
}

function setWSData(ws, data, rowIndex, quantity, elmType) {
    const border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
    }

    const boldBorder = {
        top: {style:'thick'},
        left: {style:'thick'},
        bottom: {style:'thick'},
        right: {style:'thick'}
    }

    const alignment = { vertical: 'middle', horizontal: 'center' };

    const headRow = ws.getRow(rowIndex);

    const rowPattern = (ws.name === 'Сводная') ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    rowPattern.forEach(pattern => {
        headRow.getCell(pattern).border = boldBorder
        headRow.getCell(pattern).alignment = alignment
    })

    const type = (elmType === 'bridge') ? 'Количество на один мосток' : 'Количество на одну стремянку'
    const type1 = (elmType === 'bridge') ? 'Масса на один мосток, кг' : 'Масса на одну стремянку, кг'

    headRow.getCell('A').value = '№'
    headRow.getCell('B').value = 'Наименование'
    headRow.getCell('C').value = 'Ед. измерения'
    if (ws.name === 'Сводная') {
        headRow.getCell('D').value = 'Общее количество'
        headRow.getCell('E').value = 'Общая масса, кг'
    } else {
        headRow.getCell('D').value = type
        headRow.getCell('E').value = type1
        headRow.getCell('F').value = 'Общее количество'
        headRow.getCell('G').value = 'Общая масса, кг'
    }

    const parts = {}

    let count = 1

    Object.keys(data).forEach(elm => {
        if(parts[data[elm].type]) {
            if (ws.name !== 'Сводная') {
                parts[data[elm].type].quantity = (Number(parts[data[elm].type].quantity) + Number(data[elm].length * data[elm].quantity)).toFixed(3)
                parts[data[elm].type].quantity = (Number(parts[data[elm].type].mass) + Number(data[elm].mass * data[elm].quantity)).toFixed(3)
                parts[data[elm].type].totalQuantity = (Number(parts[data[elm].type].totalQuantity) + Number(data[elm].length * data[elm].quantity * quantity)).toFixed(3)
                parts[data[elm].type].totalMass = (Number(parts[data[elm].type].totalMass) + Number(data[elm].mass * data[elm].quantity * quantity)).toFixed(3)
            } else {
                parts[data[elm].type].totalQuantity += Number((data[elm].length * data[elm].quantity).toFixed(3))
                parts[data[elm].type].totalMass += Number((data[elm].mass * data[elm].quantity).toFixed(3))
            }
        } else {
            parts[data[elm].type] = {}
            parts[data[elm].type].number = count
            parts[data[elm].type].unit = data[elm].unit

            if (ws.name !== 'Сводная') {
                parts[data[elm].type].quantity = Number((data[elm].length * data[elm].quantity).toFixed(3))
                parts[data[elm].type].totalQuantity = Number((parts[data[elm].type].quantity * quantity).toFixed(3))
                parts[data[elm].type].mass = Number((data[elm].mass * data[elm].quantity).toFixed(3))
                parts[data[elm].type].totalMass = Number((parts[data[elm].type].mass * quantity).toFixed(3))
            } else {
                parts[data[elm].type].totalQuantity = Number((data[elm].length * data[elm].quantity).toFixed(3))
                parts[data[elm].type].totalMass = Number((data[elm].mass * data[elm].quantity).toFixed(3))
            }
        }
        count++
    })

    for (let part in parts) {

        let partRow = ws.getRow(rowIndex + 1);

        rowPattern.forEach(pattern => {
            partRow.getCell(pattern).border = border
            partRow.getCell(pattern).alignment = alignment
        })

        partRow.getCell('A').value = parts[part].number
        partRow.getCell('B').value = part
        partRow.getCell('C').value = parts[part].unit
        if (ws.name === 'Сводная') {
            partRow.getCell('D').value = parts[part].totalQuantity
            partRow.getCell('E').value = parts[part].totalMass
        } else {
            partRow.getCell('D').value = parts[part].quantity
            partRow.getCell('E').value = parts[part].mass
            partRow.getCell('F').value = parts[part].totalQuantity
            partRow.getCell('G').value = parts[part].totalMass
        }

        rowIndex++
    }
}

function setLength(ws) {
    let max = 0

    for (let i = 2; i <= 7; i++) {
        ws.getColumn(i).eachCell(cell => {
            if (cell.value != null && cell.value.length > max) max = cell.value.length
        })
        ws.getColumn(i).width = max + 2
        max = 0
    }

}