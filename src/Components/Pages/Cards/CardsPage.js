import './CardPage.css'
import PlusButton from '../../PlusButton'
import Cards from './Cards'
import { useState, useEffect, useMemo } from 'react'

function CardPage(props) {
    const disable = useMemo(() => props.disableBtnStatus, [props.disableBtnStatus])
    useEffect(() => disable(), [disable])
    
    let initialCards = sessionStorage.getItem('initialCards')

    if (!initialCards) {
        initialCards = [0]
        sessionStorage.setItem('initialCards', initialCards)
        let data = {
          id: 'c_0',
          name: 'Новая карточка',
          type: 'Мосток'
        }
        sessionStorage.setItem('c_0', JSON.stringify(data))
    } else {
        initialCards = initialCards.split(',').map(num => Number(num))
    }

    const [cards, setCards] = useState(initialCards)

    const [card, setCard] = useState({})

    const addIndex = (name) => {
        name += '_1'
        initialCards.forEach(elm => {
            if (JSON.parse(sessionStorage.getItem(`c_${elm}`)).name === name) {
                name = addIndex(name)
            }
        })
        return name
    }

    const addCard = (cardForCopy) => {
        let copyOfCards = Object.assign([], cards);
        copyOfCards.sort((a, b) => a - b)
        copyOfCards.push(Number(copyOfCards[copyOfCards.length - 1]) + 1)
        setCards(copyOfCards)
        sessionStorage.setItem('initialCards', copyOfCards)

        if (cardForCopy.marker === 'copy') {
            cardForCopy.name += '_копия'
            initialCards.forEach(elm => {
                if (JSON.parse(sessionStorage.getItem(`c_${elm}`)).name === cardForCopy.name) {
                    cardForCopy.name = addIndex(cardForCopy.name)
                }
            })
        }
        cardForCopy.id = `c_${copyOfCards[copyOfCards.length - 1]}`
        setCard(cardForCopy)
    }

    const removeCard = (id) => {
        let copyOfCards = Object.assign([], cards);
        copyOfCards.splice(copyOfCards.indexOf(Number(id.split('_')[1])), 1)
        setCards(copyOfCards)
        sessionStorage.setItem('initialCards', copyOfCards)
    }

    const size = props.size
    const styles = {}
    if (size === 'small') {
        styles.flexDirection = 'column'
    }

    return (
        <div className='card-page' style={styles}>
            <div className="cards-area">
                <Cards cards={cards} addCard={addCard} removeCard={removeCard} card={card} setToast={props.setToast}></Cards>
            </div>
            <div className="btn-area">
                <PlusButton id="cardPlus" onClick={addCard} number={cards[cards.length - 1]}/>
            </div>
        </div>
    )
}

export default CardPage