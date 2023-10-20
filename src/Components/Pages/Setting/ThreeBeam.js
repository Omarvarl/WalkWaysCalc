import './ThreeBeam.css'
import Dropdown from '../../Dropdown'

function ThreeBeam(props) {
    
    const setCrossbarType = (event) => {
        props.onChange(event)
    }

    const setFillingBeamType = (event) => {
        props.setFillingBeamType(event)
    }

    return (
        <div className="three-beam">
            <div className="three-beam-type">
                <div className="three-beam-type-label">Тип поперечины</div>
                    <Dropdown
                        title='Тип поперечины'
                        onChange={setCrossbarType}
                        defaultValue={props.defaultValue}
                        options={props.options}
                    />
            </div>

            <div className="filling-beam">
                <div className="filling-beam-label">Заполняющий профиль</div>
                    <Dropdown
                        title='Заполняющий профиль'
                        onChange={setFillingBeamType}
                        defaultValue={props.defaultFillingBeam}
                        options={props.fillingOptions}
                    />
            </div>
        </div>
    )
}

export default ThreeBeam