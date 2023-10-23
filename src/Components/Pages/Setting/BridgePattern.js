import './Pattern.css'
import { useState } from 'react'

import Dropdown from '../../Dropdown'
import Crossbar from './Crossbar'
import ThreeBeam from './ThreeBeam'
import { FiTrash2 } from "react-icons/fi";

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
        sessionStorage.setItem(props.id, JSON.stringify(pattern))
        if (param === 'fillingType') openFillingConfig()
    }

    function openFillingConfig() {
        if (pattern.fillingType === 'Поперечина') {

            setFillingConfig(<Crossbar
                                onChange={(event) => setParam(event, 'crossbarType')}
                                defaultValue={pattern.crossbarType}
                                options={['Профиль 40x40x3', 'Профиль 50x50x6', 'Профиль 32x32x3', 'Трубка круглая d32']}
                                setCrossbarQuantity={(event) => setParam(event, 'crossbarQuantity')}
                                defaultQuantity={pattern.crossbarQuantity}
                            />)

        } else if (pattern.fillingType === 'Трехбалка') {

            setFillingConfig(<ThreeBeam
                                onChange={(event) => setParam(event, 'crossbarType')}
                                defaultValue={pattern.crossbarType}
                                options={['Профиль 40x40x3', 'Профиль 50x50x6', 'Профиль 32x32x3', 'Трубка круглая d32']}
                                setFillingBeamType={(event) => setParam(event, 'fillingBeamType')}
                                fillingOptions={['Профиль 40x40x3', 'Профиль 32x32x3', 'Трубка круглая d32']}
                                defaultFillingBeam={pattern.fillingBeam}
                            />)
        }
    }

    if (!fillingConfig) openFillingConfig()

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
                            options={['Швеллер 62x30x5', 'Профиль 88x58x5', 'Профиль 50x50x6']}
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
                <div className='tmp'>ЭСКИЗ</div>
            </div>
            <button className='remove-pattern' onClick={removePattern} title='Удалить шаблон'>
                <FiTrash2 />
            </button>
        </div>
    )
}

export default BridgePattern