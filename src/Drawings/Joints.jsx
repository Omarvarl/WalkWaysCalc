export default function Joints(standType, railType, beamType, crossbarType, crossbarQuantity, fillingType) {
    let crossbarPoint = 1200 / (crossbarQuantity + 1)
    let beamWallWidth = 6
    let beamHeight = 150
    let boltBodyes  =''
    let standWidth = 50
    let standWidth1 = 50
    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }
    if (beamType === 'Профиль 180x60x8') {
        beamWallWidth = 60
        beamHeight = 180
        boltBodyes = <g>
            {/* boltBodyes left------- */}
            <path d={`
                M${2306 + standWidth1 + 8} 1202
                L${2306 + standWidth1 + 60 - 8} 1202Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth1 + 8} 1214
                L${2306 + standWidth1 + 60 - 8} 1214Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2306 + standWidth1 + 8} 1262
                L${2306 + standWidth1 + 60 - 8} 1262Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth1 + 8} 1274
                L${2306 + standWidth1 + 60 - 8} 1274Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* boltBodyes right----------- */}
            <path d={`
                M${2306 + standWidth1 + 800 - 60 - 8} 1202
                L${2306 + standWidth1 + 800 - 8} 1202Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth1 + 800 - 60 - 8} 1214
                L${2306 + standWidth1 + 800 - 8} 1214Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2306 + standWidth1 + 800 - 60 - 8} 1262
                L${2306 + standWidth1 + 800 - 8} 1262Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth1 + 800 - 60 - 8} 1274
                L${2306 + standWidth1 + 800 - 8} 1274Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
        </g>
    } else if (beamType === 'Швеллер 180x70') {
        beamHeight = 180
    }
    let length = [750, 1450]
    let standBolts = []
    let count = 1
    let railRivets = []
    let bolts = []
    let standRivets = []

    // rails-------------
    if (railType === 'Швеллер 62x30x5' ) {
        railRivets.push(
            <g key={'railRivet_0'}>
                <circle cx={50 + standWidth - 10} cy={65} r={7}  //  rail rivet right
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={50 + standWidth - 10} cy={65} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </g>
        )
        length.forEach(len => {
            railRivets.push(
                <g key={'railRivet_' + count}>
                    <circle cx={len+10} cy={65} r={7}  //  rail rivet left
                        fill="none" stroke="white" strokeWidth="3"
                    />
                    <circle cx={len+10} cy={65} r={3}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                    <circle cx={len+40} cy={65} r={7}  //  rail rivet right
                        fill="none" stroke="white" strokeWidth="3"
                    />
                    <circle cx={len+40} cy={65} r={3}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>
            )
            count++
        })
        count = 1
    } else if (railType === 'Профиль 88x58x5'){
        bolts.push(
            <g key='rail_screw_0'>
                <circle cx={50 + standWidth - 15} cy={79} r={10}  //  rail screw start stand
                    fill="none" stroke="white" strokeWidth="2"
                />
                <circle cx={50 + standWidth - 15} cy={79} r={5}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </g>
        )
        length.forEach(len => {
            bolts.push(
                <g key={'rail_screw_' + count}>
                    <circle cx={len + standWidth / 2} cy={79} r={10}  //  rail screw
                        fill="none" stroke="white" strokeWidth="3"
                    />
                    <circle cx={len + standWidth / 2} cy={79} r={5}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>
            )
            count++
        })
        count = 1
    }
    if (standType === 'Профиль 50x50x6' && crossbarType === 'Профиль 40x40x3') {
        let point = crossbarPoint
        if (fillingType === 'Трехбалка') {
            point = 200
            crossbarPoint = 800
        }
        while (point < 1200) {
            standRivets.push(
                <g key={`standRivet_${count}`}>
                    <circle cx={50 + standWidth / 2} cy={point} r={7}  //  stand rivet central
                        fill="none" stroke="white" strokeWidth="3"
                    />
                    <circle cx={50 + standWidth / 2} cy={point} r={3}
                        fill="none" stroke="white" strokeWidth="2"
                    />
    
                    <circle cx={50 + standWidth + 30} cy={point} r={7}  //  stand rivet right
                        fill="none" stroke="white" strokeWidth="3"
                    />
                    <circle cx={50 + standWidth + 30} cy={point} r={3}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>
            )
            point += crossbarPoint
            count++
        }

        point = crossbarPoint
        if (fillingType === 'Трехбалка') {
            point = 200
            crossbarPoint = 800
        }
        while (point < 1200) {
            // eslint-disable-next-line no-loop-func
            length.forEach(len => {
                bolts.push(
                    <g key={'standRivet_' + count}>
                        <circle cx={len+25} cy={point} r={7}  //  stand rivet central
                            fill="none" stroke="white" strokeWidth="3"
                        />
                        <circle cx={len+25} cy={point} r={3}
                            fill="none" stroke="white" strokeWidth="2"
                        />

                        <circle cx={len-25} cy={point} r={7}  //  stand rivet left
                            fill="none" stroke="white" strokeWidth="3"
                        />
                        <circle cx={len-25} cy={point} r={3}
                            fill="none" stroke="white" strokeWidth="2"
                        />

                        <circle cx={len+75} cy={point} r={7}  //  stand rivet right
                            fill="none" stroke="white" strokeWidth="3"
                        />
                        <circle cx={len+75} cy={point} r={3}
                            fill="none" stroke="white" strokeWidth="2"
                        />
                    </g>
                )
                count++
            })
            point += crossbarPoint
        }
        count = 1
    }

    length.push(50)

    length.forEach(len => {
        let height = 1208
        if (beamType !== 'Швеллер 150x50x6' && len === 50) height += 30
        standBolts.push(
            <g key={'stand_bolt_' + count}>
                <circle cx={len + standWidth / 2} cy={height} r={37/2}  //  stand bolt up
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len + standWidth / 2} cy={height} r={10}
                    fill="none" stroke="white" strokeWidth="3"
                />

                <circle cx={len + standWidth / 2} cy={height + 60} r={37/2}  //  stand bolt down
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len + standWidth / 2} cy={height + 60} r={10}
                    fill="none" stroke="white" strokeWidth="3"
                />
            </g>
        )
        if (standType === 'Профиль 88x58x5' || crossbarType !== 'Профиль 40x40x3') {
            if (len === 50) len += 10
            let point = crossbarPoint
            if (fillingType === 'Трехбалка') {
                point = 200
                crossbarPoint = 800
            }
            while (point < 1200) {
                if (standType === 'Профиль 88x58x5') {
                    if (len === 60) len += 10
                    standBolts.push(
                        <g key={'stand_washer_center_' + count}>
                            <circle cx={len + standWidth / 2} cy={point} r={37/2}  //  stand bolt central
                                fill="none" stroke="white" strokeWidth="3"
                            />
    
                            <circle cx={len + standWidth / 2} cy={point} r={8}
                                fill="none" stroke="white" strokeWidth="3"
                            />
                            <circle cx={len + standWidth / 2} cy={point} r={3}
                                fill="none" stroke="white" strokeWidth="2"
                            />
                        </g>
                    )
                } else {
                    standBolts.push(
                        <g key={'stand_screw_center_' + count}>
                            <circle cx={len + standWidth / 2} cy={point} r={8}
                                fill="none" stroke="white" strokeWidth="3"
                            />
                            <circle cx={len + standWidth / 2} cy={point} r={3}
                                fill="none" stroke="white" strokeWidth="2"
                            />
                        </g>
                    )
                }
                point += crossbarPoint
                count++
            }
        }
        count++
    })

    return (
        <>
        {/* front----------- */}
            {railRivets}
            {standRivets}
            {bolts}
            {standBolts}
            {boltBodyes}

            <path d={`
                M${50 + standWidth / 2 - 20} ${1023 + beamHeight}
                L${50 + standWidth / 2 + 20} ${1023 + beamHeight}
                L${50 + standWidth / 2 + 20} ${1023 + beamHeight + 140}
                L${50 + standWidth / 2 - 20} ${1023 + beamHeight + 140}Z
            `}  //  steel corner
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${50 + standWidth / 2 - 20} ${1023 + beamHeight + 140 - 8}
                L${50 + standWidth / 2 + 20} ${1023 + beamHeight + 140 - 8}Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />


            {/* left-------------- */}
            {/* corners-------- */}
            <circle cx={2306 + standWidth1 + beamWallWidth + 40} cy={1187} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2306 + standWidth1 + beamWallWidth + 40} cy={1187} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={2306 + standWidth1 + beamWallWidth + 40} cy={1217} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2306 + standWidth1 + beamWallWidth + 40} cy={1217} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={2306 + standWidth1 + 800 - beamWallWidth - 40} cy={1187} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2306 + standWidth1 + 800 - beamWallWidth - 40} cy={1187} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={2306 + standWidth1 + 800 - beamWallWidth - 40} cy={1217} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2306 + standWidth1 + 800 - beamWallWidth - 40} cy={1217} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            {/* stands------ */}
            <path d={`
                M2298 ${1048 + beamHeight}
                L2284 ${1048 + beamHeight}
                L2284 ${1048 + beamHeight + 20}
                L2298 ${1048 + beamHeight + 20}Z
            `}  //  bolt head left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M2298 ${1048 + beamHeight + 60}
                L2284 ${1048 + beamHeight + 60}
                L2284 ${1048 + beamHeight + 80}
                L2298 ${1048 + beamHeight + 80}Z
            `}  //  bolt head left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 * 2 + 800 + 8} ${1048 + beamHeight}
                L${2306 + standWidth1 * 2 + 800 + 8 + 14} ${1048 + beamHeight}
                L${2306 + standWidth1 * 2 + 800 + 8 + 14} ${1048 + beamHeight + 20}
                L${2306 + standWidth1 * 2 + 800 + 8} ${1048 + beamHeight + 20}Z
            `}  //  bolt head right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 * 2 + 800 + 8} ${1048 + beamHeight + 60}
                L${2306 + standWidth1 * 2 + 800 + 8 + 14} ${1048 + beamHeight + 60}
                L${2306 + standWidth1 * 2 + 800 + 8 + 14} ${1048 + beamHeight + 80}
                L${2306 + standWidth1 * 2 + 800 + 8} ${1048 + beamHeight + 80}Z
            `}  //  bolt head right
                fill="none" stroke="white" strokeWidth="2"
            />


            <path d={`
                M${2306 + standWidth1 + beamWallWidth + 6} 1198
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1198
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1218
                L${2306 + standWidth1 + beamWallWidth + 6} 1218Z
            `} //  nut left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + beamWallWidth + 6} 1258
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1258
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1278
                L${2306 + standWidth1 + beamWallWidth + 6} 1278Z
            `}  // nut left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + beamWallWidth + 6 + 14} 1203
                L${2306 + standWidth1 + beamWallWidth + 6 + 28} 1203
                L${2306 + standWidth1 + beamWallWidth + 6 + 28} 1213
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1213Z
            `}  //  bolt left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + beamWallWidth + 6 + 14} 1263
                L${2306 + standWidth1 + beamWallWidth + 6 + 28} 1263
                L${2306 + standWidth1 + beamWallWidth + 6 + 28} 1273
                L${2306 + standWidth1 + beamWallWidth + 6 + 14} 1273Z
            `}  //  bolt left
                fill="none" stroke="white" strokeWidth="2"
            />


            <path d={`
                M${2306 + standWidth1 + 800 - beamWallWidth - 6} 1198
                L${2306 + standWidth1 + 800 - beamWallWidth - 6 - 14} 1198
                L${2306 + standWidth1 + 800 - beamWallWidth - 6 - 14} 1218
                L${2306 + standWidth1 + 800 - beamWallWidth - 6} 1218Z
            `}  // nut right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + 800 - beamWallWidth - 6} 1258
                L${2306 + standWidth1 + 800 - beamWallWidth - 6 - 14} 1258
                L${2306 + standWidth1 + 800 - beamWallWidth - 6 - 14} 1278
                L${2306 + standWidth1 + 800 - beamWallWidth - 6} 1278Z
            `} //  nut right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + 800 - beamWallWidth - 20} 1203
                L${2306 + standWidth1 + 800 - beamWallWidth - 20 - 14} 1203
                L${2306 + standWidth1 + 800 - beamWallWidth - 20 - 14} 1213
                L${2306 + standWidth1 + 800 - beamWallWidth - 20} 1213Z
            `}  // bolt right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + 800 - beamWallWidth - 20} 1263
                L${2306 + standWidth1 + 800 - beamWallWidth - 20 - 14} 1263
                L${2306 + standWidth1 + 800 - beamWallWidth - 20 - 14} 1273
                L${2306 + standWidth1 + 800 - beamWallWidth - 20} 1273Z
            `} //  bolt right
                fill="none" stroke="white" strokeWidth="2"
            />

            {/* floor------ */}
            <path d={`
                M${2306 + standWidth1 + 15} 1125
                L${2306 + standWidth1 + 15} 1111
                L${2306 + standWidth1 + 15 + 14} 1111
                L${2306 + standWidth1 + 15 + 14} 1125Z
            `}  //  left bolt
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth1 + 800 - 15} 1125
                L${2306 + standWidth1 + 800 - 15} 1111
                L${2306 + standWidth1 + 800 - 15 - 14} 1111
                L${2306 + standWidth1 + 800 - 15 - 14} 1125Z
            `}  //  right bolt
                fill="none" stroke="white" strokeWidth="2"
            />

            {/* steel corners------ */}
            <path d={`
                M2306 ${1023 + beamHeight}
                L2298 ${1023 + beamHeight}
                L2298 ${1023 + beamHeight + 140 - 8}
                L2216 ${1023 + beamHeight + 140 - 8}
                L2216 ${1023 + beamHeight + 140}
                L2306 ${1023 + beamHeight + 140}Z
            `}  //  left corner
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2306 + standWidth1 * 2 + 800} ${1023 + beamHeight}
                L${2306 + standWidth1 * 2 + 800 + 8} ${1023 + beamHeight}
                L${2306 + standWidth1 * 2 + 800 + 8} ${1023 + beamHeight + 140 - 8}
                L${2306 + standWidth1 * 2 + 800 + 90} ${1023 + beamHeight + 140 - 8}
                L${2306 + standWidth1 * 2 + 800 + 90} ${1023 + beamHeight + 140}
                L${2306 + standWidth1 * 2 + 800} ${1023 + beamHeight + 140}Z
            `}  //  right corner
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}