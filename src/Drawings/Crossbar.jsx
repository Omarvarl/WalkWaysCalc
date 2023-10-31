export default function Crossbar(crossbarType, standType, crossbarQuantity, fillingType) {

    let crossbarPoint = 1200 / (crossbarQuantity + 1)
    let standWidth = 50
    let standWidth1 = 50
    let crossbarHeight = 40
    if (crossbarType === 'Поперечина') {
        if (crossbarType === 'Профиль 32x32x3') {
            // console.log('aaaa')
            crossbarHeight = 32
        } else if (crossbarType === 'Трубка круглая d32') {
            crossbarHeight = 32
        }
    }

    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }
    let barsEnds = [750, 1450, 2050]
    let bars = []
    let count = 1
    let prev = 50
    let leftView = []

    barsEnds.forEach(elm => {
        let point = crossbarPoint
        if (fillingType === 'Трехбалка') {
            point = 200
            crossbarPoint = 800
            let fPoint = ((elm - prev - standWidth - 32) - (Math.floor((elm - prev - standWidth - 32) / 182) - 1) * 182) / 2 + prev + standWidth
            while (fPoint < elm - 32) {
                bars.push(
                    <g key={`filling_${count}`}>
                        <path d={`
                            M${fPoint} ${point + crossbarHeight / 2}
                            L${fPoint + 32} ${point + crossbarHeight / 2}
                            L${fPoint + 32} ${point + 800 - crossbarHeight / 2}
                            L${fPoint} ${point + 800 - crossbarHeight / 2}Z
                        `}
                            fill="none" stroke="white" strokeWidth="5"
                        />
                    </g>
                )
                fPoint += 182
                count++
            }
        }
        
        while (point < 1200) {
            bars.push(
                <g key={`crossbar_${count}`}>
                    <path d={`
                        M${prev + standWidth} ${point - crossbarHeight / 2}
                        L${elm} ${point - crossbarHeight / 2}
                        L${elm} ${point + crossbarHeight / 2}
                        L${prev + standWidth} ${point + crossbarHeight / 2}Z
                    `}
                        fill="none" stroke="white" strokeWidth="5"
                    />
                </g>
            )
            count++
            point += crossbarPoint
        }
        prev = elm
    })
    let point = crossbarPoint
    count = 1

    if ((standType === 'Профиль 88x58x5' || crossbarType === 'Трубка круглая d32' || crossbarType === 'Профиль 32x32x3')) {
        if (fillingType === 'Трехбалка') {
            point = 200
            crossbarPoint = 800
        }
        while (point < 1200) {
            if (crossbarType === 'Трубка круглая d32') {
                leftView.push (
                    <g key={`tube_${count}`}>
                        <circle cx={2306 + standWidth1 / 2} cy={point} r={16}
                            fill="none" stroke="white" strokeWidth="5"
                        />
                        <circle cx={2306 + standWidth1 / 2} cy={point} r={13}
                            fill="none" stroke="white" strokeWidth="5"
                        />

                        <circle cx={2306 + standWidth1 / 2 + 800 + standWidth1} cy={point} r={16}
                            fill="none" stroke="white" strokeWidth="5"
                        />
                        <circle cx={2306 + standWidth1 / 2 + 800 + standWidth1} cy={point} r={13}
                            fill="none" stroke="white" strokeWidth="5"
                        />
                    </g>
                )
            } else {
                leftView.push(
                    <g key={`squad_tube_${count}`}>
                        <path d={`
                            M${2306 + standWidth1 / 2 - crossbarHeight / 2} ${point - crossbarHeight / 2}
                            L${2306 + standWidth1 / 2 + crossbarHeight / 2} ${point - crossbarHeight / 2}
                            L${2306 + standWidth1 / 2 + crossbarHeight / 2} ${point + crossbarHeight / 2}
                            L${2306 + standWidth1 / 2 - crossbarHeight / 2} ${point + crossbarHeight / 2}Z
                        `}  //  left
                            fill="none" stroke="white" strokeWidth="5"
                        />

                        <path d={`
                            M${2306 + standWidth1 / 2 - crossbarHeight / 2 + 3} ${point - crossbarHeight / 2 + 3}
                            L${2306 + standWidth1 / 2 + crossbarHeight / 2 - 3} ${point - crossbarHeight / 2 + 3}
                            L${2306 + standWidth1 / 2 + crossbarHeight / 2 - 3} ${point + crossbarHeight / 2 - 3}
                            L${2306 + standWidth1 / 2 - crossbarHeight / 2 + 3} ${point + crossbarHeight / 2 - 3}Z
                        `}  //  left
                            fill="none" stroke="white" strokeWidth="5"
                        />

                        <path d={`
                            M${2306 + standWidth1 + 800 + standWidth1 / 2 - crossbarHeight / 2} ${point - crossbarHeight / 2}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 + crossbarHeight / 2} ${point - crossbarHeight / 2}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 + crossbarHeight / 2} ${point + crossbarHeight / 2}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 - crossbarHeight / 2} ${point + crossbarHeight / 2}Z
                        `}  //  right
                            fill="none" stroke="white" strokeWidth="5"
                        />

                        <path d={`
                            M${2306 + standWidth1 + 800 + standWidth1 / 2 - crossbarHeight / 2 + 3} ${point - crossbarHeight / 2 + 3}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 + crossbarHeight / 2 - 3} ${point - crossbarHeight / 2 + 3}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 + crossbarHeight / 2 - 3} ${point + crossbarHeight / 2 - 3}
                            L${2306 + standWidth1 + 800 + standWidth1 / 2 - crossbarHeight / 2 + 3} ${point + crossbarHeight / 2 - 3}Z
                        `}  //  right
                            fill="none" stroke="white" strokeWidth="5"
                        />
                    </g>
                ) 
            }
            point += crossbarPoint
            count++
        }
    }
    return (
        // front-----------
        <>
            {bars}
            {/* left------------ */}
            {leftView}
        </>


    )
}