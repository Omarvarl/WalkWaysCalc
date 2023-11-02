import './Header.css'
import { NavLink } from "react-router-dom";
import MenuButton from './MenuButton';


function Header(props) {
    const size = props.size
    let links
    if (size === 'normal') {
            links = <div className="refers">
            <NavLink className="home-ref" to="/">Главная</NavLink>
            <NavLink className="settings-ref" to="/setting">Шаблоны</NavLink>
            <NavLink className="cards-ref" to="/cards">Карточки</NavLink>
            <NavLink className="result-ref" to="/result">Результат</NavLink>
        </div>
    } else {
        links = <MenuButton
                options = {
                    <ul className='menu-list'>
                        <NavLink className="home-ref" to="/" key={`ref_0`}>Главная</NavLink>
                        <NavLink className="settings-ref" to="/setting" key={`ref_1`}>Шаблоны</NavLink>
                        <NavLink className="cards-ref" to="/cards" key={`ref_2`}>Карточки</NavLink>
                        <NavLink className="result-ref" to="/result" key={`ref_3`}>Результат</NavLink>
                    </ul>

                }
            />
    }
    return (
        <header className='header'>
            <div className="logo">WWC</div>
            { links }
        </header>
    )
}

export default Header