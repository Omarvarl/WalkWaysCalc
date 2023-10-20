import './Pattern.css'
import { useState } from 'react'

import Dropdown from '../../Dropdown'
import SafeBox from './SafeBox'
import { FiTrash2 } from "react-icons/fi";

function StairPattern(props) {

    let pattern
    //  getting pattern from storage. Creating empty object if pattern doesn't exists
    try {
        pattern = JSON.parse(sessionStorage.getItem(props.id))
        if (pattern == null) {
            pattern = {}
            if (props.id === 'sp_0') pattern.name = 'Новая карточка 1'
        }
    } catch (err) {
        pattern = {}
    }

    //  insert initial data to pattern
    for (let key in props.card) {
        if (!pattern[key] && props.id === props.pattern.id) pattern[key] = props.pattern[key]
    }

    if (props.id === 'sp_0') pattern.name = 'Стремянка стд.'

    if (!pattern.id) pattern.id = props.id
    if (!pattern.railType) pattern.stairBeamType = 'Профиль 88x58x5'
    if (!pattern.standType) pattern.stepType = 'Трубка рифленая d32'
    if (!pattern.type) pattern.type = 'Просто стремянка'
    if (!pattern.safeBoxLength) pattern.safeBoxLength = 0

    sessionStorage.setItem(props.id, JSON.stringify(pattern))

    // console.log(pattern)

    const [stairConfig, setStairConfig] = useState('-1')

    //  function for pattern removing
    const removePattern = () => {
        props.removePattern(props.id)
        sessionStorage.removeItem(props.id)
    }

    //  function for pattern saving with new param
    const setParam = (event, param) => {

        if (param === 'name') {
            if (!event.target.value) {
                props.setToast({
                    type:'Ошибка',
                    message:'Имя карточки не может быть пустым'
                })

                event.target.value = pattern.name
                sessionStorage.setItem(props.id, JSON.stringify(pattern))
                return
            } else {
                let cards = sessionStorage.getItem('stairInitialPatterns').split(',')
                cards.forEach(elm => {
                    let newCard = JSON.parse(sessionStorage.getItem(`sp_${elm}`))
                    if (newCard.name && newCard.name === event.target.value.trim()) {
                        props.setToast( {
                            type:'Ошибка',
                            message:'Карточка с таким именем уже существует',
                            visibility: {visibility: 'visible'}
                        })
                        event.target.value = pattern.name
                        sessionStorage.setItem(props.id, JSON.stringify(pattern))
                        return
                    }
                })
            }
        }

        pattern[param] = event.target.value
        sessionStorage.setItem(props.id, JSON.stringify(pattern))
        if (param === 'type') openStairConfig()
    }

    function openStairConfig() {
        if (pattern.type === 'Просто стремянка') {

            setStairConfig('')

        } else if (pattern.type === 'С защитным коробом') {

            setStairConfig(<SafeBox
                                defaultValue={pattern.safeBoxLength}
                                setSafeBoxLength={(event) => setParam(event, 'safeBoxLength')}
                            />)
        }
    }

    if (stairConfig === '-1') openStairConfig()

    return (
        <div className="pattern">
            <div className="pattern-config">
                <input
                    type="text"
                    className="pattern-name"
                    placeholder='Имя шаблона'
                    onBlur={(event) => setParam(event, 'name')}
                    defaultValue={pattern.name}
                />

                <div className="stair-frame">

                    <div className="stair-beam-type">
                        <div className="stair-beam-type-label">Тип балок</div>
                        <Dropdown
                            title='Тип балок'
                            onChange={(event) => setParam(event, 'stairBeamType')}
                            defaultValue={pattern.stairBeamType}
                            options={['Профиль 88x58x5', 'Профиль 50x50x6']}
                        />
                    </div>

                    <div className="step-type">
                        <div className="step-type-label">Тип перекладины</div>
                        <Dropdown
                            title='Тип перекладины'
                            onChange={(event) => setParam(event, 'stepType')}
                            defaultValue={pattern.stepType}
                            options={['Трубка рифленая d32', 'Профиль 32x32x3', 'Трубка круглая d32']}
                        />
                    </div>

                    <div className="stair-type">
                        <div className="stair-type-label">Тип стремянки</div>
                        <Dropdown
                            title='Тип стремянки'
                            onChange={(event) => setParam(event, 'type')}
                            defaultValue={pattern.type}
                            options={['Просто стремянка', 'С защитным коробом']}
                        />
                    </div>

                    <div className="filling-config">
                        {stairConfig}
                    </div>

                </div>
            </div>

            <div className="pattern-drawing">
                <div className='tmp'>ЭСКИЗ</div>
            </div>
            <button className='remove-pattern' onClick={removePattern} title='Удалить шаблон'>
                <FiTrash2 />
            </button>
        </div>
    )
}

export default StairPattern