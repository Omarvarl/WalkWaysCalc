import './Pattern.css'
import { useState, useRef } from 'react'

import Dropdown from '../../Dropdown'
import Crossbar from './Crossbar'
import ThreeBeam from './ThreeBeam'
import { FiTrash2 } from "react-icons/fi";
import DrawingChose from './DrawingChose'

function BridgePattern(props) {
    let pattern
    //  getting pattern from storage. Creating empty object if pattern doesn't exists
    try {
        pattern = JSON.parse(sessionStorage.getItem(props.id))
        if (pattern == null) {
            pattern = {}
            if (props.id === 'bp_0') pattern.name = 'Новая карточка 1'
        }
    } catch (err) {
        pattern = {}
    }

        //  insert initial data to pattern
    for (let key in props.card) {
        if (!pattern[key] && props.id === props.pattern.id) pattern[key] = props.pattern[key]
    }

    if (props.id === 'bp_0') pattern.name = 'Мосток стд.'
    if (!pattern.railType) pattern.railType = 'Швеллер 62x30x5'
    if (!pattern.standType) pattern.standType = 'Профиль 50x50x6'
    if (!pattern.fillingType) pattern.fillingType = 'Поперечина'
    if (!pattern.beamType) pattern.beamType = 'Швеллер 150x50x6'
    if (!pattern.frameCrossbarType) pattern.frameCrossbarType = 'Швеллер 74x60x7'
    if (!pattern.crossbarType) pattern.crossbarType = 'Профиль 40x40x3'
    if (!pattern.crossbarQuantity) pattern.crossbarQuantity = 1

    sessionStorage.setItem(props.id, JSON.stringify(pattern))

    const [fillingConfig, setFillingConfig] = useState('')

    //  function for pattern removing
    const removePattern = () => {
        props.removePattern(props.id)
        sessionStorage.removeItem(props.id)
    }
    const [railType, setRailType] = useState(pattern.railType)
    const [standType, setStandType] = useState(pattern.standType)
    const [beamType, setBeamType] = useState(pattern.beamType)
    const [frameCrossbarType, setFrameCrossbarType] = useState(pattern.frameCrossbarType)
    const [crossbarType, setCrossbarType] = useState(pattern.crossbarType)
    const [crossbarQuantity, setCrossbarQuantity] = useState(pattern.crossbarQuantity)
    const [filling, setFilling] = useState(pattern.fillingType)

    //  function for pattern saving with new param
    const setParam = (event, param) => {
        if (param === 'fillingType') {
            if (filling !== event.target.value) {
                setFilling(event.target.value)
                pattern.crossbarType = 'Профиль 40x40x3'
                setCrossbarType('Профиль 40x40x3')
                setFillingConfig()
            }
        }

        if (param === 'beamType') {
            if (beamType !== event.target.value) setBeamType(event.target.value)
        }

        if (param === 'frameCrossbarType') {
            if (frameCrossbarType !== event.target.value) setFrameCrossbarType(event.target.value)
        }

        if (param === 'crossbarType') {
            if (crossbarType !== event.target.value) {
                pattern.crossbarType = event.target.value
                setCrossbarType(event.target.value)
                setFillingConfig()
            }
        }

        if (param === 'crossbarQuantity') {
            if (event.target.value > 5 || event.target.value < 0) {
                props.setToast( {
                    type:'Ошибка',
                    message:'Количество поперечин не может быть меньше 1 или больше 5',
                    visibility: {visibility: 'visible'}
                })
                event.target.value = pattern.crossbarQuantity
                sessionStorage.setItem(props.id, JSON.stringify(pattern))
                return
            }
            if (crossbarQuantity !== event.target.value) {
                pattern.crossbarQuantity = event.target.value
                setCrossbarQuantity(event.target.value)
                setFillingConfig()
            }
        }

        if (param === 'railType') {
            if (event.target.value === 'Швеллер 62x30x5' && pattern.standType === 'Профиль 88x58x5' && railType !== event.target.value) {
                props.setToast( {
                    type:'Ошибка',
                    message:'Швеллер 62x30x5 не может быть установлен на профиль 88x58x5',
                    visibility: {visibility: 'visible'}
                })
                event.target.value = pattern.railType
                sessionStorage.setItem(props.id, JSON.stringify(pattern))
                return
            }
            if (railType !== event.target.value) setRailType(event.target.value)
        }

        if (param === 'standType') {
            if (event.target.value === 'Профиль 88x58x5' && pattern.railType === 'Швеллер 62x30x5' && standType !== event.target.value) {
                props.setToast( {
                    type:'Ошибка',
                    message:'Швеллер 62x30x5 не может быть установлен на профиль 88x58x5',
                    visibility: {visibility: 'visible'}
                })
                event.target.value = pattern.standType
                sessionStorage.setItem(props.id, JSON.stringify(pattern))
                return
            }
            if (standType !== event.target.value) setStandType(event.target.value)
        }

        if (param === 'name') {
            if (!event.target.value) {
                props.setToast({
                    type:'Ошибка',
                    message:'Имя карточки не может быть пустым'
                })

                event.target.value = pattern.name
                sessionStorage.setItem(props.id, JSON.stringify(pattern))
                return
            } else if (event.target.value !== pattern.name) {
                let cards = sessionStorage.getItem('bridgeInitialPatterns').split(',')
                cards.forEach(elm => {
                    let newCard = JSON.parse(sessionStorage.getItem(`bp_${elm}`))
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
        // console.log(pattern[param])
        sessionStorage.setItem(props.id, JSON.stringify(pattern))
        if (param === 'fillingType') openFillingConfig()
    }

    function openFillingConfig() {
        if (pattern.fillingType === 'Поперечина') {

            setFillingConfig(<Crossbar
                                onChange={(event) => setParam(event, 'crossbarType')}
                                defaultValue={pattern.crossbarType}
                                options={['Профиль 40x40x3', 'Профиль 32x32x3', 'Трубка круглая d32']}
                                setCrossbarQuantity={(event) => setParam(event, 'crossbarQuantity')}
                                defaultQuantity={pattern.crossbarQuantity}
                            />)

        } else if (pattern.fillingType === 'Трехбалка') {

            setFillingConfig(<ThreeBeam
                                setFillingBeamType={(event) => setParam(event, 'fillingBeamType')}
                                fillingOptions={['Профиль 32x32x3', 'Трубка круглая d32']}
                                defaultFillingBeam={pattern.fillingBeam}
                            />)
        }
    }

    if (!fillingConfig) openFillingConfig()

    const divBlock = useRef(null)
    let drawing = DrawingChose({
        railType: railType,
        standType: standType,
        beamType: beamType,
        frameCrossbarType: frameCrossbarType,
        crossbarType: crossbarType,
        crossbarQuantity: crossbarQuantity,
        fillingType: filling
    })

    let dis = (sessionStorage.getItem('bridgeInitialPatterns').split(',').length > 1) ? false : true

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

                <div className="section-PO">

                    <div className="section-label">Перильное ограждение</div>

                    <div className="rail-type">
                        <div className="rail-type-label">Тип перил</div>
                        <Dropdown
                            title='Тип перил'
                            onChange={(event) => setParam(event, 'railType')}
                            defaultValue={pattern.railType}
                            options={['Швеллер 62x30x5', 'Профиль 88x58x5']}
                        />
                    </div>

                    <div className="stand-type">
                        <div className="stand-type-label">Тип стойки</div>
                        <Dropdown
                            title='Тип стойки'
                            onChange={(event) => setParam(event, 'standType')}
                            defaultValue={pattern.standType}
                            options={['Профиль 88x58x5', 'Профиль 50x50x6']}
                        />
                    </div>

                    <div className="filling-type">
                        <div className="filling-type-label">Тип заполнения</div>
                        <Dropdown
                            title='Тип заполнения'
                            onChange={(event) => setParam(event, 'fillingType')}
                            defaultValue={pattern.fillingType}
                            options={['Поперечина', 'Трехбалка']}
                        />
                    </div>

                    <div className="filling-config">
                        {fillingConfig}
                    </div>
                </div>

                <div className="section-frame">
                    <div className="section-label">Каркас</div>

                    <div className="beam-type">
                        <div className="beam-type-label">Тип балки</div>
                        <Dropdown
                            title='Тип балки'
                            onChange={(event) => setParam(event, 'beamType')}
                            defaultValue={pattern.beamType}
                            options={['Швеллер 150x50x6', 'Швеллер 180x70', 'Профиль 180x60x8']}
                        />
                    </div>

                    <div className="frame-crossbar-type">
                        <div className="frame-crossbar-type-label">Тип поперечины</div>
                        <Dropdown
                            title='Тип поперечины'
                            onChange={(event) => setParam(event, 'frameCrossbarType')}
                            defaultValue={pattern.frameCrossbarType}
                            options={['Швеллер 74x60x7', 'Профиль 88x58x5']}
                        />
                    </div>

                </div>
            </div>

            <div className="pattern-drawing">
                <div ref={divBlock} className="front-drawing">
                    {
                        drawing
                    }
                </div> 
            </div>
            <button className='remove-pattern' onClick={removePattern} title='Удалить шаблон' disabled={dis}>
                <FiTrash2 />
            </button>
        </div>
    )
}

export default BridgePattern