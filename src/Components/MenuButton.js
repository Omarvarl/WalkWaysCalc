import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import './MenuButton.css'

function MenuButton(props) {
    const [menu, setMenu] = useState('')
    const showMenu = () => {
        setMenu(props.options)
        window.addEventListener('click', hideMenu)
        function hideMenu(event) {
            let elm = event.target
            if (event.target.classList[0] !== 'menu-button') {
                for (let i = 0; i < 2; i++) {
                    if (elm && elm.classList[0] !== 'menu-button') elm = elm.parentElement
                }
            }
            if (elm && elm.classList[0] !== 'menu-button') {
                setMenu('')
            }
            return () => window.removeEventListener('click', hideMenu)
        }
    }
    return (
        <div>
            <button
                onClick={showMenu}
                className='menu-button'
                title='Меню' 
            >
                    <GiHamburgerMenu />
            </button>
            { menu }
        </div>
    )
}

export default MenuButton