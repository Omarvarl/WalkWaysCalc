const fs = require('fs');
const ExcelJS = require('exceljs');

module.exports = async function makeExcel(data) {

    let wb= await new ExcelJS.Workbook();

    const keys = Object.keys(data)
    // const ws = wb.addWorksheet('Спецификация')
    // console.log(keys)

    keys.forEach((key) => {
        let ws = wb.addWorksheet(key)

        ws.getCell('A1').value = 'Стеклопластик'
        ws.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' }  //  set text alignment
        ws.mergeCells('A1:E1')

        setWSData(ws, data[key]['fData'], 2, data[key].quantity)

        const rowIndex = Object.keys(data[key]['fData']).length + 1

        ws.getCell(`A${rowIndex + 3}`).value = 'Крепеж'
        ws.getCell(`A${rowIndex + 3}`).alignment = { vertical: 'middle', horizontal: 'center' }  //  set text alignment
        ws.mergeCells(`A${rowIndex + 3}:E${rowIndex + 3}`)

        setWSData(ws, data[key]['jData'], rowIndex + 4, data[key].quantity)

        setLength(ws)
    })

    await wb.xlsx.writeFile(`./temp/таблица.xlsx`)

    return 'dflvbln'
}

function setWSData(ws, data, rowIndex, quantity) {
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

    const rowPattern = ['A', 'B', 'C', 'D', 'E']

    rowPattern.forEach(pattern => {
        headRow.getCell(pattern).border = boldBorder
        headRow.getCell(pattern).alignment = alignment
    })

    headRow.getCell('A').value = '№'
    headRow.getCell('B').value = 'Наименование'
    headRow.getCell('C').value = 'Ед. измерения'
    headRow.getCell('D').value = 'Количество на один мосток'
    headRow.getCell('E').value = 'Общее количество'

    // console.log(data)

    const parts = {}

    let count = 1

    Object.keys(data).forEach(elm => {
        if(parts[data[elm].type]) {
            if (ws.name !== 'Сводная') {
                parts[data[elm].type].quantity = (Number(parts[data[elm].type].quantity) + Number(data[elm].length * data[elm].quantity)).toFixed(3)
                parts[data[elm].type].totalQuantity = (Number(parts[data[elm].type].totalQuantity) + Number(data[elm].length * data[elm].quantity * quantity)).toFixed(3)
            } else {
                parts[data[elm].type].totalQuantity += Number((data[elm].length * data[elm].quantity).toFixed(3))
            }
        } else {
            parts[data[elm].type] = {}
            parts[data[elm].type].number = count
            parts[data[elm].type].unit = data[elm].unit
            if (ws.name !== 'Сводная') {
                parts[data[elm].type].quantity = Number((data[elm].length * data[elm].quantity).toFixed(3))
                parts[data[elm].type].totalQuantity = Number((parts[data[elm].type].quantity * quantity).toFixed(3))
            } else {
                parts[data[elm].type].quantity = '-'
                parts[data[elm].type].totalQuantity = Number((data[elm].length * data[elm].quantity).toFixed(3))
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
        partRow.getCell('D').value = parts[part].quantity
        partRow.getCell('E').value = parts[part].totalQuantity
        rowIndex++
    }
}

function setLength(ws) {
    let max = 0

    for (let i = 2; i <= 6; i++) {
        ws.getColumn(i).eachCell(cell => {
            if (cell.value != null && cell.value.length > max) max = cell.value.length
        })
        ws.getColumn(i).width = max + 2
        max = 0
    }

}