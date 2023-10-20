import './PatternsPage.css'

import { useState } from 'react'
import Patterns from './Patterns'
import PlusButton from '../../PlusButton'

function PatternsPage(props) {

    let initialPatterns = sessionStorage.getItem(props.initial)
    if (!initialPatterns) {
        initialPatterns = [0]
        sessionStorage.setItem(props.initial, initialPatterns)
    } else {
        initialPatterns = initialPatterns.split(',').map(num => Number(num))
    }

    const [patterns, setPatterns] = useState(initialPatterns)

    const [pattern, setPattern] = useState({})

    const addPattern = (emptyPattern) => {
        let copyOfPatterns = Object.assign([], patterns);
        copyOfPatterns.sort((a, b) => a - b)
        copyOfPatterns.push(Number(copyOfPatterns[copyOfPatterns.length - 1]) + 1)
        setPatterns(copyOfPatterns)
        sessionStorage.setItem(props.initial, copyOfPatterns)

        emptyPattern.id = props.index + copyOfPatterns[copyOfPatterns.length - 1]
        setPattern(emptyPattern)
        sessionStorage.setItem(props.index + copyOfPatterns[copyOfPatterns.length - 1], JSON.stringify(emptyPattern))
    }

    const removePattern = (id) => {
        let copyOfPatterns = Object.assign([], patterns);
        copyOfPatterns.splice(copyOfPatterns.indexOf(Number(id.split('_')[1])), 1)
        setPatterns(copyOfPatterns)
        sessionStorage.setItem(props.initial, copyOfPatterns)
    }

    return (
        <div className='patterns-page'>
            <div className="patterns-area">
                <Patterns patterns={patterns} addPattern={addPattern} removePattern={removePattern} index={props.index} pattern={pattern} setToast={props.setToast}></Patterns>
            </div>
            <PlusButton id={props.index + 'plus'} onClick={addPattern} number={patterns[patterns.length - 1]} />
        </div>
    )
}

export default PatternsPage