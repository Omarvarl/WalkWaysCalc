import './SafeBox.css'

function SafeBox(props) {

    const setSafeBoxLength = (event) => {
        props.setSafeBoxLength(event)
    }

    return (
        <div className="safe-box-length"> 
            <div className="safe-box-length-label">Длина защитного короба в мм</div>
            <input
                type="number"
                min={600}
                step={100}
                className="safe-box-length-input"
                onBlur={setSafeBoxLength}
                defaultValue={props.defaultValue}
            />
        </div>
    )
}

export default SafeBox