import './Toast.css'
import { AiOutlineClose } from "react-icons/ai"

function Toast(props) {

    const closeToast = () => {
        props.data.hide()
    }

    return (
        <div className={`h-toast`} style={props.style}>
            <div className="toast-headerr">
                {props.data.type}
                <button className='toast-close' onClick={closeToast}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="message">
                {props.data.message}
            </div>
        </div>
    )
}

export default Toast