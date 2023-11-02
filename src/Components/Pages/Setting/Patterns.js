import BridgePattern from './BridgePattern'
import StairPattern from './StairPattern'

function Patterns(props) {

    if (!props.patterns.length) return ''

    return (
        <div className="patterns">
            {
                props.patterns.map(item => {
                return (props.index === 'bp_')
                ?
                <BridgePattern
                    key={`bp_${item}`}
                    id={`bp_${item}`}
                    addPattern={props.addPattern}
                    removePattern={props.removePattern}
                    index={props.index}
                    pattern={props.pattern}
                    setToast={props.setToast}
                    size={props.size}
                />
                :
                <StairPattern
                    key={`sp_${item}`}
                    id={`sp_${item}`}
                    addPattern={props.addPattern}
                    removePattern={props.removePattern}
                    index={props.index}
                    pattern={props.pattern}
                    setToast={props.setToast}
                    size={props.size}
                />

                })
            }
        </div>
    )
}

export default Patterns