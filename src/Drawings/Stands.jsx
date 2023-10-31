export default function Stands(length, lengths, standType, railType, beamType) {
    let result = []
    let count = 0
    let railHeight = 30
    let standWidth = 50
    let standWidth1 = 50
    let beamHeight = 150

    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }
    if (railType === 'Профиль 88x58x5') {
        railHeight = 58
    } else if (railType === 'Профиль 50x50x6') {
        railHeight = 50
    }
    if (beamType === 'Профиль 180x60x8') {
        beamHeight = 180
    } else if (beamType === 'Швеллер 180x70') {
        beamHeight = 180
    }

    // front stands------
    lengths.forEach(len => {
        result.push(
            <g key={'stand_' + count}>
                <path d={`
                    M${len} ${50 + railHeight}
                    L${len} ${1163 + beamHeight}
                    L${len + standWidth} ${1163 + beamHeight}
                    L${len + standWidth} ${50 + railHeight}Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`M${len + 6} ${50 + railHeight}L${len + 6} ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`M${len + standWidth - 6} ${50 + railHeight}L${len + standWidth - 6} ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </g>
        )
        count++
    })
    return (
        <>
        {/* startStand----- */}
            <path d={`
                M${length} 50
                L${length} ${1163 + beamHeight}
                L${length + standWidth} ${1163 + beamHeight}
                L${length + standWidth} ${50 + railHeight}
                L${length + standWidth / 2} ${50 + railHeight}
                L${length + standWidth / 2} 50Z`}  // contour
                fill="none" stroke="white" strokeWidth="5"
            />
            {/* invisible lines----------- */}
            <path d={`
                M${length + 6} 50
                L${length + 6} ${1163 + beamHeight}Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`
                M${length + standWidth - 6} ${50 + railHeight}
                L${length + standWidth - 6} ${1163 + beamHeight}Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            {result}

            {/* left------ */}
            <>
                <path d={`
                    M2306 55
                    L2306 ${1163 + beamHeight}
                    L${2306 + standWidth1} ${1163 + beamHeight}
                    L${2306 + standWidth1} 55Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`
                    M2312 55
                    L2312 ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`
                    M${2306 + standWidth1 - 6} 55
                    L${2306 + standWidth1 - 6} ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </>

            <>
            {/* right-------------- */}
                <path d={`
                    M${2306 + 800 + standWidth1} 55
                    L${2306 + 800 + standWidth1} ${1163 + beamHeight}
                    L${2306 + 800 + 2 * standWidth1} ${1163 + beamHeight}
                    L${2306 + 800 + 2 * standWidth1} 55Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`
                    M${2306 + standWidth1 + 800 + 6} 55
                    L${2306 + standWidth1 + 800 + 6} ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`
                    M${2306 + 800 + 2 * standWidth1 - 6} 55
                    L${2306 + 800 + 2 * standWidth1 - 6} ${1163 + beamHeight}Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </>
         </>
    )
}