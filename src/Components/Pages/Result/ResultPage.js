import './ResultPage.css'
import { useState, createElement, useEffect, useMemo } from 'react'
import Tabs from '../../Tabs';
import './Calc.js'
import runCalc from './Calc.js';
import Table from './Table';


function ResultPage(props) {

    let initialCardsText = sessionStorage.getItem('initialCards')
    
    const initialCards = useMemo( () => initialCardsText.split(','), [initialCardsText])
    let cards = useMemo( () => initialCards.map(card => JSON.parse(sessionStorage.getItem(`c_${card}`))), [initialCards])

    const cardsName = useMemo( () => cards.map(card => card.name), [cards])
    let data = useMemo( () => runCalc(cards), [cards])
    let activeTab = sessionStorage.getItem('resultActiveTab')
    if (!activeTab) activeTab = 't_0'


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

    let count = 0
    const newComponents = Object.keys(data).map(card => {
        count++
        return createElement('div', {className: card, id:`t_${count - 1}`, key:`t_${count - 1}`}, <Table data={data[card]} cardName={card}/>)
    })

    const activateBtn = useMemo( () => {
        return props.activateDownloadBtn
    }, [props.activateDownloadBtn])

    useEffect(() => {
        if (!uncorrectCards.length) activateBtn(data)
    }, [data, activateBtn, uncorrectCards])


    const handleBasicClick = (event) => {
        const value = event.target.id

        if (value === basicActive) {
            return;
        }

        setTabPage(value)
        setBasicActive(value);
        sessionStorage.setItem('resultActiveTab', value)

    };

    const tabs = cardsName.map((elm, index) => {
        return {name: elm, id: 't_' + index}
    })

    return (
        <div className='result-page'>
            <Tabs
                onClick={handleBasicClick}
                items={tabs}
                activeTab={activeTab}
                pages={newComponents}
                tabPage={tabPage}
                uncorrectCards={uncorrectCards}
             />
        </div>
    )
}

export default ResultPage