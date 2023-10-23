import './Card.css'
import Dropdown from '../../Dropdown'
import { FiCopy, FiTrash2 } from "react-icons/fi";
import { useState } from 'react';

function Card(props) {
    
    let bridgePatterns = []
    let stairPatterns = []

    try {
        let bridgePatternsIndex = sessionStorage.getItem('bridgeInitialPatterns').split(',')
        bridgePatternsIndex.forEach(index => {
            bridgePatterns.push(JSON.parse(sessionStorage.getItem(`bp_${index}`)).name)
        })
    } catch(err) {
        bridgePatterns = ['Мосток стд.']
    }

    try {
        let stairPatternsIndex = sessionStorage.getItem('stairInitialPatterns').split(',')
        stairPatternsIndex.forEach(index => {
            stairPatterns.push(JSON.parse(sessionStorage.getItem(`sp_${index}`)).name)
        })
    } catch(err) {
        stairPatterns = ['Стремянка стд.']
    }

    if (!bridgePatterns) bridgePatterns = ['Мосток стд.']
    if (!stairPatterns) stairPatterns = ['Стремянка стд.']

    let card
    try {
        card = JSON.parse(sessionStorage.getItem(props.id))
        if (card == null) {
            card = {}
            if (props.id === 'c_0') {
                card.name = 'Новая карточка'
                card.type = 'Мосток'
            }
        }
    } catch (err) {
        card = {}
    }

    for (let key in props.card) {
        if (!card[key] && props.id === props.card.id) card[key] = props.card[key]
    }

    sessionStorage.setItem(props.id, JSON.stringify(card))

    const copyCard = () => {
        card.marker = 'copy'
        props.addCard(card)
    }

    const removeCard = () => {
        props.removeCard(props.id)
        sessionStorage.removeItem(props.id)
    }

    let initPatterns = (card.type === 'Мосток') ? bridgePatterns : stairPatterns

    const [iPatterns, setIPatterns] = useState(card.pattern)
    const [patterns, setPatterns] = useState(initPatterns)

    const setParam = (event, param) => {
        if (param === 'name') {

            if (!event.target.value) {
                props.setToast({
                    type:'Ошибка',
                    message:'Имя карточки не может быть пустым'
                })

                event.target.value = card.name
                sessionStorage.setItem(props.id, JSON.stringify(card))
                return
            } else {
                let cards = sessionStorage.getItem('initialCards').split(',')
                cards.forEach(elm => {
                    let newCard = JSON.parse(sessionStorage.getItem(`c_${elm}`))
                    if (newCard.name && newCard.name === event.target.value.trim() && newCard.id !== card.id) {
                        props.setToast( {
                            type:'Ошибка',
                            message:'Карточка с таким именем уже существует',
                            visibility: {visibility: 'visible'}
                        })
                        event.target.value = card.name
                        sessionStorage.setItem(props.id, JSON.stringify(card))
                        return
                    }
                })
            }
        }

        if (param === 'length' && card.type === 'Стремянка') {
            if (event.target.value < 1100) {
                props.setToast({
                    type:'Ошибка',
                    message:'Длина стремянки не может быть меньше 1100 мм'
                })

                // event.target.value = card.length
                event.target.value = ''
                card.length = ''
                sessionStorage.setItem(props.id, JSON.stringify(card))
                return
            }
        }

        if (param === 'width' && card.type === 'Стремянка') {
            if (event.target.value < 200) {
                props.setToast({
                    type:'Ошибка',
                    message:'Ширина стремянки не может быть меньше 200 мм'
                })

                // event.target.value = card.width
                event.target.value = ''
                card.width = ''
                sessionStorage.setItem(props.id, JSON.stringify(card))
                return
            }
        }

        if (param === 'length' && card.type === 'Мосток') {
            if (event.target.value < 200) {
                props.setToast({
                    type:'Ошибка',
                    message:'Длина мостка не может быть меньше 200 мм'
                })

                // event.target.value = card.length
                event.target.value = ''
                card.length = ''
                sessionStorage.setItem(props.id, JSON.stringify(card))
                return
            }
        }

        if (param === 'width' && card.type === 'Мосток') {
            if (event.target.value < 400) {
                props.setToast({
                    type:'Ошибка',
                    message:'Ширина мостка не может быть меньше 400 мм'
                })

                // event.target.value = card.width
                event.target.value = ''
                card.width = ''
                sessionStorage.setItem(props.id, JSON.stringify(card))
                return
            }
        }

        if (param === 'type') {
            setPatterns((event.target.value === 'Мосток') ? bridgePatterns : stairPatterns)
            card.pattern = event.target.value + ' стд.'
            card.type = event.target.value
            setIPatterns(event.target.value + ' стд.')
            sessionStorage.setItem(props.id, JSON.stringify(card))
            return
        }

        if (param === 'pattern') {
            setIPatterns(event.target.value)
            card.pattern = iPatterns
            sessionStorage.setItem(props.id, JSON.stringify(card))
            return
        }

        card[param] = event.target.value
        sessionStorage.setItem(props.id, JSON.stringify(card))


    }

    if (!card.type) {
        card.type = 'Мосток'
        sessionStorage.setItem(props.id, JSON.stringify(card))
    }

    if (!card.pattern) {
        card.pattern = 'Мосток стд.'
        sessionStorage.setItem(props.id, JSON.stringify(card))
    }

    return (
        <div className="card" id={props.id} key={props.id}>
            <div className="name-area">
                <input
                    type="text"
                    className="name-input"
                    placeholder="Наименование"
                    onBlur={(event => setParam(event, 'name'))}
                    defaultValue={card.name}
                />
            </div>
            <div className="characther-area">
                <div className="length-area">
                    <input
                        type="number"
                        className="length-input"
                        placeholder="Длина в мм"
                        min={200}
                        max={5000}
                        step={100}
                        onBlur={(event => setParam(event, 'length'))}
                        defaultValue={card.length}
                    />
                </div>
                <div className="width-area">
                    <input
                        type="number"
                        className="width-input"
                        placeholder="Ширина в мм"
                        min={200}
                        max={5000}
                        step={100}
                        onBlur={(event => setParam(event, 'width'))}
                        defaultValue={card.width}
                    />
                </div>
                <div className="quantity-area">
                    <input
                        type="number"
                        className="quantity-input"
                        placeholder="Количество"
                        min={1}
                        step={1}
                        onBlur={(event => setParam(event, 'quantity'))}
                        defaultValue={card.quantity}
                    />
                </div>
                <div className="type-area">
                    <button className='clone-card' onClick={copyCard} title='Сделать дубликат'>
                        <FiCopy/>
                    </button>

                    <div className="selects">
                        <Dropdown
                            title='Тип'
                            onChange={(event => setParam(event, 'type'))}
                            defaultValue={card.type}
                            options={['Мосток', 'Стремянка']}
                        />

                        <Dropdown
                            title='Шаблон'
                            onChange={(event => setParam(event, 'pattern'))}
                            defaultValue={iPatterns}
                            options={patterns}
                        />
                    </div>

                    <button className='remove-card' onClick={removeCard} title='Удалить карточку'>
                        <FiTrash2 />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card