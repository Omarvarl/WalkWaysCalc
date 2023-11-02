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
                <label className="crossbar-type-label">Тип поперечины</label>
                <Dropdown
                    title='Тип поперечины'
                    onChange={setCrossbarType}
                    defaultValue={props.defaultValue}
                    options={props.options}
                />
            </div>
            <div className="crossbar-quantity">
                <label className="crossbar-quantity-label">Количество поперечин</label>
                <input
                    type="number"
                    min={1}
                    max={5}
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