import './Crossbar.css'
import Dropdown from '../../Dropdown'

function Crossbar(props) {
    
    const setCrossbarType = (event) => {
        props.onChange(event)
    }

    const setCrossbarQuantity = (event) => {
        props.setCrossbarQuantity(event)
    }

    return (
        <div className="crossbar">
            <div className="crossbar-type">
                <div className="crossbar-type-label">Тип поперечины</div>
                <Dropdown
                    title='Тип поперечины'
                    onChange={setCrossbarType}
                    defaultValue={props.defaultValue}
                    options={props.options}
                />
            </div>
            <div className="crossbar-quantity">
            <div className="crossbar-quantity-label">Количество поперечин</div>
            <input
                type="number"
                min={2}
                max={10}
                step={1}
                className="crossbar-quantuty-input"
                onChange={setCrossbarQuantity}
                defaultValue={props.defaultQuantity}
            />
            </div>
        </div>
    )
}

export default Crossbar