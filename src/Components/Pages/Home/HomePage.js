import './HomePage.css'
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import { useEffect, useMemo, useState } from 'react';

import Clue from './Clue'

function HomePage(props) {

const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
useEffect(() => disable(), [disable])

const arrowRight = <div
    className="arrow">
    <FaArrowRightLong />
</div>

const arrowDown = <div
    className="arrow-down">
    <FaArrowDownLong />
</div>

const settingClue = <Clue
        id='setting'
        image={require('../../../image/PatternClue.png')}
        description='Заполните шаблон или создайте новый с необходимыми элементами'
        route='/setting'
    />

const cardClue = <Clue
        id='cards'
        image={require('../../../image/CardClue.png')}
        description='Внесите габариты и количество всех мостков и стремянок'
        route='/cards'
    />

const resultClue = <Clue
        id='result'
        image={require('../../../image/ResultClue.png')}
        description='Увидеть результат можно на вкладке "Результат"'
        route='/result'
    />

const buttonsClue = <Clue
        id='buttons'
        image={require('../../../image/Buttons.png')}
        description='Сохранить или открыть сессию можно с помощью соответствующих кнопок на боковой панели'
        route='/'
    />

const downloadClue = <Clue
        id='download'
        image={require('../../../image/ResultBtn.png')}
        description='Выгрузить результат в формате excel можно с помощью кнопки на боковой панели (Появляется на вкладке результат)'
        route='/'
    />

let clues = <div className="home-page">
        <div className="clues">
            { settingClue }
            { arrowRight }
            { cardClue }
            { arrowRight }
            { resultClue }
        </div>

        <img
            src={require('../../../image/label.png')}
            alt="label.png"
            className='label'
        />

        <div className="clues">
            { buttonsClue }
            { downloadClue }
        </div>
    </div>

    if (props.size === 'small') clues = <div className="home-page">
        <div className="clues-small">
            { settingClue }
            { arrowDown }
            { cardClue }
            { arrowDown }
            { cardClue }
            { arrowDown }
            { resultClue }
            { buttonsClue }
            { downloadClue }
        </div>
    </div>

    return (
        clues
    )
    
}

export default HomePage