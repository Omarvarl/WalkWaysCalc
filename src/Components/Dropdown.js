import './Dropdown.css'

function Dropdown(props) {
    return (
        <select
            className="dropdown"
            title={props.title}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        >
            <option disabled className='drop-options'>{props.title}</option>
            {
                props.options.map(item => {
                        return <option className='drop-options' key={item} value={item}>{item}</ option>
                })
            }
        </select>
    )
}
export default Dropdown
