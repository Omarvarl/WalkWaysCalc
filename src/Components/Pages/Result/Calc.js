

    const runCalc = (cards, cardsList) => {
        let bPatterns
        let sPatterns

        try {
            bPatterns = sessionStorage.getItem('bridgeInitialPatterns').split(',')
            sPatterns = sessionStorage.getItem('stairInitialPatterns').split(',')
        } catch (err) {
            if (!bPatterns) bPatterns = [0]
            if (!sPatterns) sPatterns = [0]
        }

        let bPatternsList
        let sPatternsList

        try {
            bPatternsList = bPatterns.map(elm => JSON.parse(sessionStorage.getItem(`bp_${elm}`)))
            sPatternsList = sPatterns.map(elm => JSON.parse(sessionStorage.getItem(`sp_${elm}`)))
        } catch (err) {
            if (!bPatternsList) bPatternsList = [{bp_0: {name: 'Новая карточка'}}]
            if (!sPatternsList) sPatternsList = [{sp_0: {name: 'Новая карточка'}}]
        }

        const total = {fData: {}, jData: {}}
        const result = {}

        cardsList.forEach(elm => {

            if (!elm.quantity || elm.quantity === '0') elm.quantity = 0  //  Case with wrong card filling
            if (!elm.width || elm.quantity === '0') elm.width = 0
            if (!elm.length || elm.quantity === '0') elm.length = 0

            let res = {}

            if (elm.type === 'Мосток') {
                bPatternsList.forEach(pat => {
                    if (pat.name === elm.pattern) {
                        res = bridgeCalc(pat, elm);
                    }
                })
            } else {
                sPatternsList.forEach(pat => {
                    if (pat.name === elm.pattern) {
                        res = stairCalc(pat, elm);
                    }
                })
            }
                res.state = true

                if (!elm.quantity || !elm.width || !elm.length) {  //  Case with wrong card filling
                    Object.keys(res).forEach(elm => {
                        if (typeof res[elm] === 'object')
                        Object.keys(res[elm]).forEach(part => {
                            res[elm][part].length = 0
                            res[elm][part].quantity = 0
                        })
                    })
                    res.state = false
                }
                

            result[elm.name] = res
        })

        makeTotal('fData')
        makeTotal('jData')

        function makeTotal(param) {
            Object.keys(result).forEach(elm => {
                let index = 0
                Object.keys(result[elm][param]).forEach(part => {
                    
                    if (total[param][part]) {
                        if (total[param][part].type === result[elm][param][part].type) {
                            total[param][part].length = Number(total[param][part].length) + Number(result[elm][param][part].length * result[elm][param][part].quantity * result[elm].quantity)
                            total[param][part].mass = Number(total[param][part].mass) + Number(result[elm][param][part].mass * result[elm][param][part].quantity * result[elm].quantity)
                        } else {
                            let mark = 0
                            for (let i = 1; i <= index; i++) {
                                if (total[param][part + i]) {
                                    if (total[param][part + i].type === result[elm][param][part].type) {
                                        total[param][part + i].length = Number(total[param][part + i].length) + Number(result[elm][param][part].length * result[elm][param][part].quantity * result[elm].quantity)
                                        total[param][part + i].mass = Number(total[param][part + i].mass) + Number(result[elm][param][part].mass * result[elm][param][part].quantity * result[elm].quantity)
                                        mark = 1
                                    }
                                }
                            }
                            if (!mark) {
                                index++
                                total[param][part + index] = structuredClone(result[elm][param][part])
                                total[param][part + index].length *= Number(total[param][part + index].quantity * result[elm].quantity)
                                total[param][part + index].mass *= Number(total[param][part + index].quantity * result[elm].quantity)
                                total[param][part + index].quantity = 1
                                
                            }
                        }
    
                    } else {
                        total[param][part] = structuredClone(result[elm][param][part])
                        total[param][part].length *= Number(total[param][part].quantity * result[elm].quantity)
                        total[param][part].mass *= Number(total[param][part].quantity * result[elm].quantity)
                        total[param][part].quantity = 1
                    }
                })
                
            })
        }
        // console.log(result)

        result['Сводная'] = Object.assign(total)

        return result

        function massDefine(type, length) {
            if (type === 'Профиль 88x58x5') {
                return 2.63 * length
            } else if (type === 'Швеллер 62x30x5') {
                return 1.09 * length
            } else if (type === 'Профиль 50x50x6') {
                return 2.03 * length
            } else if (type === 'Профиль 40x40x3') {
                return 0.85 * length
            } else if (type === 'Профиль 32x32x3') {
                return 0.67 * length
            } else if (type === 'Трубка круглая d32') {
                return 0.55 * length
            } else if (type === 'Швеллер 150x50x6') {
                return 2.87 * length
            } else if (type === 'Профиль 180x60x8') {
                return 7.03 * length
            } else if (type === 'Швеллер 74x60x7') {
                return 2.52 * length
            } else if (type === 'Трубка рифленая d32') {
                return 0.8 * length
            } else if (type === 'Уголок 75x75x6') {
                return 1.73 * length
            } else if (type === 'Пластина 110x110x5') {
                return 0.121
            } else if (type === 'Отбойная полоса 100x3') {
                return 0.6 * length
            } else if (type === 'Уголок Металлический 140x90x8') {
                return 0.54
            } else if (type === 'Пластина (заглушка)') {
                return 0.1
            } else if (type === 'Решетчатый настил') {
                return 18 * length
            }
        }
        
        function bridgeCalc(pattern, elm) {

            const widthDelta = (pattern.beamType === 'Профиль 180x60x8') ? 120 : 12
            const standWidth  = (pattern.standType === 'Профиль 50x50x6') ? 50 : 88
            const materialSpec = {fData: {}, jData: {}}

            materialSpec.type = 'bridge'
            materialSpec.quantity = Number(elm.quantity)

            materialSpec.fData.beam = {
                length: elm.length / 1e3,
                quantity: Math.ceil(elm.width / 1000) * 2,
                type: pattern.beamType,
                unit: 'м/пог',
                mass: massDefine(pattern.beamType, elm.length / 1e3)
            }

            materialSpec.fData.frameCrossbar = {
                length: (elm.width - widthDelta) / 1e3,
                quantity: Math.ceil(elm.length / 1100),
                type: pattern.frameCrossbarType,
                unit: 'м/пог',
                mass: massDefine(pattern.frameCrossbarType, (elm.width - widthDelta) / 1e3)
            }

            materialSpec.fData.corners = {
                length: 134 / 1e3,
                quantity: materialSpec.fData.frameCrossbar.quantity * 2,
                type: 'Уголок 75x75x6',
                unit: 'м/пог',
                mass: massDefine('Уголок 75x75x6', 134 / 1e3)
            }

            materialSpec.fData.flooring = {
                length: elm.width * elm.length / 1e6,
                quantity: 1,
                type: 'Решетчатый настил',
                unit: 'м2',
                mass: massDefine('Решетчатый настил', elm.width * elm.length / 1e6)
            }

            materialSpec.fData.stand = {
                length: 1258 / 1e3,
                quantity: (materialSpec.fData.frameCrossbar.quantity + 1) * 2,
                type: pattern.standType,
                unit: 'м/пог',
                mass: massDefine(pattern.standType, 1258 / 1e3)
            }

            materialSpec.fData.rail = {
                length: elm.length / 1e3,
                quantity: 2,
                type: pattern.railType,
                unit: 'м/пог',
                mass: massDefine(pattern.railType, elm.length / 1e3)
            }

            materialSpec.fData.crossbar = {
                length: (elm.length - standWidth * (materialSpec.fData.frameCrossbar.quantity + 1)) / (materialSpec.fData.frameCrossbar.quantity + 1) / 1e3,
                quantity: (materialSpec.fData.frameCrossbar.quantity + 1) * 2 * (pattern.crossbarQuantity) ? pattern.crossbarQuantity : 1,
                type: pattern.crossbarType,
                unit: 'м/пог',
                mass: massDefine(pattern.crossbarType, (elm.length - standWidth * (materialSpec.fData.frameCrossbar.quantity + 1)) / (materialSpec.fData.frameCrossbar.quantity + 1) / 1e3)
            }

            materialSpec.fData.connectingTube = {
                length: 150 / 1e3,
                quantity: (pattern.crossbarType === 'Трубка круглая d32' || pattern.crossbarType === 'Профиль 32x32x3') ? 0 : materialSpec.fData.stand.quantity,
                type: 'Трубка круглая d32',
                unit: 'м/пог',
                mass: massDefine('Трубка круглая d32', 150 / 1e3)
            }

            materialSpec.fData.plate = {
                length: 110 * 110 / 1e6,
                quantity: materialSpec.fData.beam.quantity,
                type: 'Пластина 110x110x5',
                unit: 'м2',
                mass: massDefine('Пластина 110x110x5')
            }

            if (pattern.fillingType === 'Трехбалка') {

                materialSpec.fData.fillingBeam = {
                    length: 800 / 1e3,
                    quantity: Math.ceil(materialSpec.fData.crossbar.length / 0.15 * materialSpec.fData.crossbar.quantity),
                    type: pattern.fillingBeamType,
                    unit: 'м/пог',
                    mass: massDefine(pattern.fillingBeamType, 800 / 1e3)
                }

                materialSpec.fData.crossbar.quantity *= 2
            }

            materialSpec.fData.board = {
                length: elm.length / 1e3,
                quantity: 2,
                type: 'Отбойная полоса 100x3',
                unit: 'м/пог',
                mass: massDefine('Отбойная полоса 100x3', elm.length / 1e3)
            }

            materialSpec.jData.standBolt = {
                length: 1,
                type: 'Болт M12x85',
                quantity: (materialSpec.fData.stand.quantity - 2) * 2,
                unit: 'шт',
                mass: 1 / 11
            }

            materialSpec.jData.cornerBolt = {
                length: 1,
                type: 'Болт M12x95',
                quantity: 4,
                unit: 'шт',
                mass: 0.1
            }

            materialSpec.jData.standNut = {
                length: 1,
                type: 'Гайка M12',
                quantity: materialSpec.fData.stand.quantity * 2,
                unit: 'шт',
                mass: 1 / 70
            }

            materialSpec.jData.standWasher = {
                length: 1,
                type: 'Шайба увеличенная 12',
                quantity: materialSpec.fData.stand.quantity * 4 - 4,
                unit: 'шт',
                mass: 0.022
            }

            materialSpec.jData.standGrover = {
                length: 1,
                type: 'Гровер 12',
                quantity: materialSpec.fData.stand.quantity * 2,
                unit: 'шт',
                mass: 0.015
            }

            materialSpec.jData.floorBolt = {
                length: 1,
                type: 'Болт M8x70',
                quantity: 4,
                unit: 'шт',
                mass: 0.033
            }

            materialSpec.jData.crossbarBolt = {
                length: 1,
                type: 'Болт M8x30',
                quantity: materialSpec.fData.frameCrossbar.quantity * 4 ,
                unit: 'шт',
                mass: 0.017
            }

            materialSpec.jData.crossbarNut = {
                length: 1,
                type: 'Гайка M8',
                quantity: materialSpec.jData.crossbarBolt.quantity + 4 ,
                unit: 'шт',
                mass: 0.006
            }

            materialSpec.jData.crossbarWasher = {
                length: 1,
                type: 'Шайба увеличенная 8',
                quantity: materialSpec.jData.crossbarNut.quantity * 2,
                unit: 'шт',
                mass: 0.006
            }

            materialSpec.jData.crossGrover = {
                length: 1,
                type: 'Гровер 8',
                quantity: materialSpec.jData.crossbarNut.quantity,
                unit: 'шт',
                mass: 0.004
            }

            materialSpec.jData.crossbarRivet = {
                length: 1,
                type: 'Заклепка',
                quantity: materialSpec.fData.stand.quantity * 7 - 4 + materialSpec.fData.crossbar.quantity * 4 - 4,
                unit: 'шт',
                mass: 0.008
            }

            materialSpec.jData.standCorner = {
                length: 40 / 1e3,
                type: 'Уголок Металлический 140x90x8',
                quantity: 2,
                unit: 'м/пог',
                mass: massDefine('Уголок Металлический 140x90x8')
            }

            return materialSpec
        }

        function stairCalc(pattern, elm) {
            const materialSpec = {fData: {}, jData: {}}

            materialSpec.type = 'stair'
            materialSpec.quantity = Number(elm.quantity)

            if (elm.length < 1100) elm.length = 0

            materialSpec.fData.beam = {
                length: elm.length / 1e3,
                quantity: 2,
                type: pattern.stairBeamType,
                unit: 'м/пог',
                mass: massDefine(pattern.stairBeamType, elm.length / 1e3)
            }

            materialSpec.fData.steps = {
                length: elm.width / 1e3,
                quantity: Math.ceil((elm.length - 1100) / 300),
                type: pattern.stepType,
                unit: 'м/пог',
                mass: massDefine(pattern.stepType, elm.width / 1e3)
            }

            materialSpec.fData.bracket = {
                length: 340 / 1e3,
                quantity: Math.ceil(elm.length / 1500 * 2),
                type: 'Швеллер 150x50x6',
                unit: 'м/пог',
                mass: massDefine('Швеллер 150x50x6', 340 / 1e3)
            }

            materialSpec.fData.corners = {
                length: 120 / 1e3,
                quantity: materialSpec.fData.bracket.quantity,
                type: 'Уголок 75x75x6',
                unit: 'м/пог',
                mass: massDefine('Уголок 75x75x6', 120 / 1e3)
            }

            materialSpec.fData.caps = {
                length: 88 * 58 / 1e6,
                quantity: 2,
                type: 'Пластина (заглушка)',
                unit: 'м2',
                mass: massDefine('Пластина (заглушка)')
            }

            if (pattern.type === 'С защитным коробом') {

                materialSpec.fData.safeBoxBeam = {
                    length: pattern.safeBoxLength / 1e3,
                    quantity: 3,
                    type: 'Профиль 40x40x3',
                    unit: 'м/пог',
                    mass: massDefine('Профиль 40x40x3', pattern.safeBoxLength / 1e3)
                }

                materialSpec.fData.safeBoxBeam1 = {
                    length: pattern.safeBoxLength / 1e3,
                    quantity: 2,
                    type: 'Трубка круглая d32',
                    unit: 'м/пог',
                    mass: massDefine('Трубка круглая d32', pattern.safeBoxLength / 1e3)
                }

                materialSpec.fData.safeBoxBar = {
                    length: 800 / 1e3,
                    quantity: Math.ceil(pattern.safeBoxLength / 300 + 1),
                    type: 'Профиль 40x40x3',
                    unit: 'м/пог',
                    mass: massDefine('Профиль 40x40x3', 800 / 1e3)
                }

                materialSpec.fData.safeBoxBar1 = {
                    length: elm.width / 1e3,
                    quantity: Math.ceil(pattern.safeBoxLength / 600 + 1),
                    type: 'Профиль 40x40x3',
                    unit: 'м/пог',
                    mass: massDefine('Профиль 40x40x3', elm.width / 1e3)
                }

                materialSpec.jData.safeBoltBeam = {
                    length: 1,
                    type: 'Болт M8x80',
                    quantity: materialSpec.fData.safeBoxBar.quantity * 2,
                    unit: 'шт',
                    mass: 0.037
                }

                materialSpec.jData.safeBoltBeam1 = {
                    length: 1,
                    type: 'Болт M8x60',
                    quantity: Math.ceil(materialSpec.fData.safeBoxBar.quantity / 2 * 5),
                    unit: 'шт',
                    mass: 0.029
                }

                materialSpec.jData.safeNutBeam = {
                    length: 1,
                    type: 'Гайка M8',
                    quantity: materialSpec.jData.safeBoltBeam.quantity + materialSpec.jData.safeBoltBeam1.quantity,
                    unit: 'шт',
                    mass: 0.006
                }

                materialSpec.jData.safeGroverBeam = {
                    length: 1,
                    type: 'Гровер 8',
                    quantity: materialSpec.jData.safeNutBeam.quantity,
                    unit: 'шт',
                    mass: 0.004
                }

                materialSpec.jData.safeWasherBeam = {
                    length: 1,
                    type: 'Шайба увеличенная 8',
                    quantity: materialSpec.jData.safeNutBeam.quantity * 2,
                    unit: 'шт',
                    mass: 0.006
                }
            }

            materialSpec.jData.stepBolt = {
                length: 1,
                type: 'Шпилька M8x110',
                quantity: materialSpec.fData.steps.quantity * 2,
                unit: 'шт',
                mass: 0.04
            }

            materialSpec.jData.bracketBolt = {
                length: 1,
                type: 'Болт M8x80',
                quantity: materialSpec.fData.bracket.quantity * 2,
                unit: 'шт',
                mass: 0.037
            }

            materialSpec.jData.cornerBolt = {
                length: 1,
                type: 'Болт M8x30',
                quantity: materialSpec.jData.bracketBolt.quantity,
                unit: 'шт',
                mass: 0.017
            }

            materialSpec.jData.nuts = {
                length: 1,
                type: 'Гайка M8',
                quantity: materialSpec.jData.cornerBolt.quantity + materialSpec.jData.bracketBolt.quantity + materialSpec.jData.stepBolt.quantity,
                unit: 'шт',
                mass: 0.006
            }

            materialSpec.jData.grovers = {
                length: 1,
                type: 'Гровер 8',
                quantity: materialSpec.jData.nuts.quantity,
                unit: 'шт',
                mass: 0.004
            }

            materialSpec.jData.washers = {
                length: 1,
                type: 'Шайба увеличенная 8',
                quantity: materialSpec.jData.nuts.quantity * 2,
                unit: 'шт',
                mass: 0.006
            }

            return materialSpec
        }

    }

    export default runCalc