export default function Beam(beamType, standType) {
    let beamHeight = 150
    let beamWidth = 50
    if (beamType === 'Профиль 180x60x8') {
        beamHeight = 180
        beamWidth = 60
    } else if (beamType === 'Швеллер 180x70') {
        beamHeight = 180
        beamWidth = 70
    }
    let standWidth = 50
    let standWidth1 = 50
    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }

    let beamsEnds = [750, 1450, 2050]
    let beams = []
    let count = 1
    let prev = 50
    beamsEnds.forEach(elm => {
        beams.push(<g key={`beam_${count}`}>
            <path d={`
                M${prev + standWidth} 1163
                L${elm} 1163
                L${elm} ${1163 + beamHeight}
                L${prev + standWidth} ${1163 + beamHeight}Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${prev + standWidth} 1173
                L${elm} 1173Z
            `}  //  invisible line up
                fill="none" stroke="white" strokeWidth="3"
            />

            <path d={`
                M${prev + standWidth} ${1163 + beamHeight - 9}
                L${elm} ${1163 + beamHeight - 9}Z
            `}  //  invisible line down
                fill="none" stroke="white" strokeWidth="3"
            />

        </g>)
        prev = elm
        count++
    })
    let leftView = <g>
        <path d={`
            M${2306 + standWidth1} 1172
            A9 9 -45 0 1 ${2306 + standWidth1 + 9} 1163
            L${2306 + standWidth1 + beamWidth} 1163
            L${2306 + standWidth1 + beamWidth} 1169
            L${2306 + standWidth1 + 9} 1169
            L${2306 + standWidth1 + 9} ${1163 + beamHeight - 9}
            L${2306 + standWidth1 + beamWidth} ${1163 + beamHeight - 9}
            L${2306 + standWidth1 + beamWidth} ${1163 + beamHeight}
            L${2306 + standWidth1 + 9} ${1163 + beamHeight}
            A9 9 45 0 1 ${2306 + standWidth1} ${1163 + beamHeight - 9}Z
        `}
            fill="none" stroke="white" strokeWidth="6"
        />
        <path d={`
            M${2306 + standWidth1 + 800} 1172
            A9 9 45 0 1 ${2306 + standWidth1 + 800 - 9} 1163
            L${2306 + standWidth1 + 800 - beamWidth} 1163
            L${2306 + standWidth1 + 800 - beamWidth} 1169
            L${2306 + standWidth1 + 800 - 9} 1169
            L${2306 + standWidth1 + 800 - 9} ${1163 + beamHeight - 9}
            L${2306 + standWidth1 + 800 - beamWidth} ${1163 + beamHeight - 9}
            L${2306 + standWidth1 + 800 - beamWidth} ${1163 + beamHeight}
            L${2306 + standWidth1 + 800 - 9} ${1163 + beamHeight}
            A9 9 -45 0 1 ${2306 + standWidth1 + 800} ${1163 + beamHeight - 9}Z
        `}
            fill="none" stroke="white" strokeWidth="6"
        />
    </g>

    if (beamType === 'Профиль 180x60x8') {
        leftView = <g>
            <path d={`
                M${2306 + standWidth1} 1172
                A9 9 -45 0 1 ${2306 + standWidth1 + 9} 1163
                L${2306 + standWidth1 + beamWidth} 1163
                A9 9 45 0 1 ${2306 + standWidth1 + beamWidth} 1172
                L${2306 + standWidth1 + beamWidth} ${1163 + beamHeight - 9}
                A9 9 -45 0 1 ${2306 + standWidth1 + beamWidth - 9} ${1163 + beamHeight}
                L${2306 + standWidth1 + 9} ${1163 + beamHeight}
                A9 9 45 0 1 ${2306 + standWidth1} ${1163 + beamHeight - 9}Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />

            <path d={`
                M${2306 + standWidth1 + 8} 1171
                L${2306 + standWidth1 + beamWidth - 8} 1171
                L${2306 + standWidth1 + beamWidth - 8} ${1163 + beamHeight - 8}
                L${2306 + standWidth1 + 9} ${1163 + beamHeight - 8}Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />

            <path d={`
                M${2306 + 800 + standWidth1 - beamWidth} 1172
                A9 9 -45 0 1 ${2306 + 800 + standWidth1 + 9  - beamWidth} 1163
                L${2306 + standWidth1 + beamWidth + 800  - beamWidth} 1163
                A9 9 45 0 1 ${2306 + 800 + standWidth1} 1172
                L${2306 + standWidth1  + 800} ${1163 + beamHeight - 9}
                A9 9 -45 0 1 ${2306 + 800 + standWidth1 - 9} ${1163 + beamHeight}
                L${2306 + standWidth1 + 9 + 800 - beamWidth} ${1163 + beamHeight}
                A9 9 45 0 1 ${2306 + 800 + standWidth1  - beamWidth} ${1163 + beamHeight - 9}Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />

            <path d={`
                M${2306 + 800 + standWidth1 + 8  - beamWidth} 1171
                L${2306 + 800 + standWidth1 - 8} 1171
                L${2306 + 800 + standWidth1 - 8} ${1163 + beamHeight - 8}
                L${2306 + 800 + standWidth1 + 9  - beamWidth} ${1163 + beamHeight - 8}Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />
        </g>
    }

    return (
        <>
            {/* front--------- */}
            {beams}

            {/* left------ */}
            {leftView}
        </>
    )
}