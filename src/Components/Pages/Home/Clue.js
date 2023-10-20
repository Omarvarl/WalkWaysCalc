import './Clue.css'

import { NavLink } from "react-router-dom";

function Clue(props) {

    return (
        <div className="clue">

            <NavLink to={props.route}>
                <img src={props.image} alt={props.image} id={props.id} className="screenshot" />
            </NavLink>

            <div className="description">{props.description}</div>
        </div>

    )
}

export default Clue