export default function StairCorner(beamType) {
    let beamWidth = 58
    let beamWidth1 = 88

    if (beamType === 'Профиль 50x50x6') {
        beamWidth = 50
        beamWidth1 = 50
    }

    return (
        <>
            {/* front--------- */}
            <path d={`
                M${1000 + beamWidth / 2 - 25} ${2400 - 75}
                L${1000 + beamWidth / 2 + 25} ${2400 - 75}
                L${1000 + beamWidth / 2 + 25} 2400
                L${1000 + beamWidth / 2 - 25} 2400Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 25} ${2400 - 6}
                L${1000 + beamWidth / 2 + 25} ${2400 - 6}

            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 25} ${2400 - 75}
                L${1800 + beamWidth / 2 + 25} ${2400 - 75}
                L${1800 + beamWidth / 2 + 25} 2400
                L${1800 + beamWidth / 2 - 25} 2400Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 25} ${2400 - 6}
                L${1800 + beamWidth / 2 + 25} ${2400 - 6}

            `}  //  right
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left------------- */}
            <path d={`
                M${2500 + beamWidth1} ${2400 - 75}
                L${2500 + beamWidth1 + 6} ${2400 - 75}
                L${2500 + beamWidth1 + 6} ${2400 - 6}
                L${2500 + beamWidth1 + 75} ${2400 - 6}
                L${2500 + beamWidth1 + 75} ${2400}
                L${2500 + beamWidth1} 2400Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}