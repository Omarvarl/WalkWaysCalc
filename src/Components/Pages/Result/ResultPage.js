import './ResultPage.css'
import { useState, createElement, useEffect, useMemo } from 'react'
import Tabs from '../../Tabs';
import './Calc.js'
import runCalc from './Calc.js';
import Table from './Table';


function ResultPage(props) {

    const initialCardsText = sessionStorage.getItem('initialCards')
    const initialCards = useMemo( () => initialCardsText.split(','), [initialCardsText])
    const cards = useMemo( () => initialCards.map(card => JSON.parse(sessionStorage.getItem(`c_${card}`))), [initialCards])
    const cardsName = useMemo( () => cards.map(card => card.name), [cards])
    let data = useMemo( () => runCalc(initialCards, cards), [initialCards, cards])
    let activeTab = sessionStorage.getItem('resultActiveTab')
    if (!activeTab) activeTab = cardsName[0]


    const [basicActive, setBasicActive] = useState(activeTab);
    const [tabPage, setTabPage] = useState(basicActive);

    if (!cardsName.includes('Сводная')) cardsName.push('Сводная')

    const uncorrectCards = useMemo( () => {
        const result = []
        Object.keys(data).forEach( elm => {

            if (!data[elm].state && elm !== 'Сводная') return result.push(elm)
            
        })
        return result
    }, [data])

    const setToast = useMemo(() => props.setToast, [props.setToast])

    useEffect(() => {
        if (uncorrectCards.length) {
            setToast({
                type: 'Предупреждение',
                message: 'Некорректно заполнены поля карточки'
            })
        }
    }, [uncorrectCards, setToast])

    // console.log(data)

    const newComponents = Object.keys(data).map(card => {
        return createElement('div', {className: card}, <Table data={data[card]} cardName={card}/>)
    })

    const activateBtn = useMemo( () => {
        return props.activateDownloadBtn
    }, [props.activateDownloadBtn])

    useEffect(() => {
        activateBtn(data)
    }, [data, activateBtn])


    const handleBasicClick = (event) => {
        const value = event.target.innerText

        if (value === basicActive) {
            return;
        }

        setTabPage(value)
        setBasicActive(value);
        sessionStorage.setItem('resultActiveTab', value)

    };


    return (
        <div className='result-page'>
            <Tabs
                onClick={handleBasicClick}
                items={cardsName}
                activeTab={activeTab}
                pages={newComponents}
                tabPage={tabPage}
                uncorrectCards={uncorrectCards}
             />
        </div>
    )
}

export default ResultPage