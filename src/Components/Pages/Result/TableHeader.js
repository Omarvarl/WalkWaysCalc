import './Table.css'

function TableHeader(props) {
    const type = (props.type === 'bridge') ? 'Количество на один мосток' : 'Количество на одну стремянку'
    return (
        <tr className='table-header'>
            <th datatype='string'>№</th>
            <th datatype='string'>Наименование</th>
            <th datatype='string'>Ед. измерения</th>
            <th datatype='string'>{type}</th>
            <th datatype='string'>Общее количество</th>
        </tr>
    )
}

export default TableHeader