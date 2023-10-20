import './Header.css'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <div className="logo">WWC</div>
            <div className="refers">
                <NavLink className="home-ref" to="/">Главная</NavLink>
                <NavLink className="settings-ref" to="/setting">Шаблоны</NavLink>
                <NavLink className="cards-ref" to="/cards">Карточки</NavLink>
                <NavLink className="result-ref" to="/result">Результат</NavLink>
            </div>
        </header>
    )
}

export default Header