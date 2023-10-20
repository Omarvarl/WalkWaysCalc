import './PlusButton.css'
import { PlusLg } from 'react-bootstrap-icons';

function PlusButton(props) {

    const addCard = (event) => {
        let elm = event.target
        while (!elm.classList.contains('btn')) elm = elm.parentElement
        const id = elm.id

        let cardsIndexes
        if (id === 'cardPlus') cardsIndexes = sessionStorage.getItem('initialCards')
        if (id === 'bp_plus') cardsIndexes = sessionStorage.getItem('bridgeInitialPatterns')
        if (id === 'sp_plus') cardsIndexes = sessionStorage.getItem('stairInitialPatterns')
        if (cardsIndexes) cardsIndexes = cardsIndexes.split(',')
    
        let cards = cardsIndexes.forEach( elm => {
            if (id === 'cardPlus') cards.push(JSON.parse(sessionStorage.getItem(`c_${elm}`)))
            if (id === 'bp_plus') cards.push(JSON.parse(sessionStorage.getItem(`bp_${elm}`)))
            if (id === 'sp_plus') cards.push(JSON.parse(sessionStorage.getItem(`sp_${elm}`)))
        })
    
        const cardsNames = cards.map(elm => elm.name)
    
        let name =  `Новая карточка`
    
        let count = 0
    
        if (cardsNames.length)
        while (cardsNames.includes(name)) {
            count++
            name = `Новая карточка ` + count
        }
    
        const emptyCard = {
            name: name
        }
        props.onClick(emptyCard)
    }

    return (
        <button type="button" className="btn btn-dark plus-btn" onClick={addCard} id={props.id}>
            <PlusLg />
        </button>
    )
}

export default PlusButton