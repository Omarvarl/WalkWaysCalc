import './Cards.css'
import Card from './Card'

function Cards(props) {

    if (!props.cards.length) return ''

    return (
        <div className="cards">
            {
                props.cards.map(item => {
                    return <Card
                                key={`c_${item}`}
                                id={`c_${item}`}
                                addCard={props.addCard}
                                removeCard={props.removeCard}
                                card={props.card}
                                setToast={props.setToast}
                            />
                })
            }

        </div>
    )
}

export default Cards