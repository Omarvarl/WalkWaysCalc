

function TableBody(props) {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td>{props.unit}</td>
            <td>{props.quantity}</td>
            <td>{props.totalQuantity}</td>
        </tr>
    )
}

export default TableBody