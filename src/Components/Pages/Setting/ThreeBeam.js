import './ThreeBeam.css'
import Dropdown from '../../Dropdown'

function ThreeBeam(props) {

    const setFillingBeamType = (event) => {
        props.setFillingBeamType(event)
    }

    return (
        <div className="three-beam">

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