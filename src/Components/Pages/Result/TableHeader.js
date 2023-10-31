import './Table.css'

function TableHeader(props) {
    const type = (props.type === 'bridge') ? 'Количество на один мосток' : 'Количество на одну стремянку'
    const type1 = (props.type === 'bridge') ? 'Масса на один мосток, кг' : 'Масса на одну стремянку, кг'
    return (
        <tr className='table-header'>
            <th datatype='string'>№</th>
            <th datatype='string'>Наименование</th>
            <th datatype='string'>Ед. измерения</th>
            <th datatype='string'>{type}</th>
            <th datatype='string'>{type1}</th>
            <th datatype='string'>Общее количество</th>
            <th datatype='string'>Общая масса, кг</th>
        </tr>
    )
}

export default TableHeader