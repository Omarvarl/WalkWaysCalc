import './HomePage.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useMemo } from 'react';


import Clue from './Clue'

function HomePage(props) {

const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
useEffect(() => disable(), [disable])

if (!sessionStorage.getItem('initialCards')) {
    sessionStorage.setItem('initialCards', [0])
}
if (!sessionStorage.getItem('bridgeInitialPatterns')) {
    sessionStorage.setItem('bridgeInitialPatterns', [0])
    sessionStorage.setItem('bp_0', {name: 'Мосток стд.', railType: 'Швеллер 62x30x5'})
}


// const bPatterns = sessionStorage.getItem('bridgeInitialPatterns').split(',')
// const sPatterns = sessionStorage.getItem('stairInitialPatterns').split(',')

const arrow = <div
    className="arrow">
    <FaArrowRightLong />
</div>

    return (
        <div className="home-page">
            <div className="arrow-start d-none">
                <FaArrowLeftLong />
            </div>
            <div className="clues">
                <Clue
                    id='setting'
                    image={require('../../../image/PatternClue.png')}
                    description='Заполните шаблон или создайте новый с необходимыми элементами'
                    route='/setting'
                />

                { arrow }

                <Clue
                    id='cards'
                    image={require('../../../image/CardClue.png')}
                    description='Внесите габариты и количество всех мостков и стремянок'
                    route='/cards'
                />

                { arrow }

                <Clue
                    id='result'
                    image={require('../../../image/ResultClue.png')}
                    description='Увидеть результат можно на вкладке "Результат"'
                    route='/result'
                />
            </div>

            <img
                src={require('../../../image/label.png')}
                alt="label.png"
                className='label'
            />

            <div className="clues">
                <Clue
                    id='buttons'
                    image={require('../../../image/Buttons.png')}
                    description='Сохранить или открыть сессию можно с помощью соответствующих кнопок на боковой панели'
                    route='/'
                />

                <Clue
                    id='download'
                    image={require('../../../image/ResultBtn.png')}
                    description='Выгрузить результат в формате excel можно с помощью кнопки на боковой панели (Появляется на вкладке результат)'
                    route='/'
                />
            </div>
        </div>
    )
}

export default HomePage