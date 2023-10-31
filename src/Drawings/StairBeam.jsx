export default function StairBeam(beamType, stairType) {
    let beamWidth = 58
    let beamWidth1 = 88

    if (beamType === 'Профиль 50x50x6') {
        beamWidth = 50
        beamWidth1 = 50
    }

    let beams = (
        <>
            <path d={`
                M${1000} 50
                L${1000 + beamWidth} 50
                L${1000 + beamWidth} 2400
                L${1000} 2400Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth - 6} 50
                L${1000 + beamWidth - 6} 2400
            `}  //  invisible lines right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${1800} 50
                L${1800 + beamWidth} 50
                L${1800 + beamWidth} 2400
                L${1800} 2400Z
            `}  //  right
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1806} 50
                L${1806} 2400
            `}  //  invisible lines left
                fill="none" stroke="white" strokeWidth="2"
            />
        </>
    )

    if (stairType === 'С защитным коробом') {
        beams = (
            <>
                <path d={`
                    M${1000} 50
                    L${1000} 2400
                    L${1000 + beamWidth} 2400
                    L${1000 + beamWidth} 1050
                    L${1000 + beamWidth - 9} 1050
                    L${1000 + beamWidth - 9} 50Z
                `}  //  left
                    fill="none" stroke="white" strokeWidth="5"
                />
    
                <path d={`
                    M${1000 + beamWidth - 6} 2400
                    L${1000 + beamWidth - 6} 1050
                `}  //  invisible lines right
                    fill="none" stroke="white" strokeWidth="2"
                />
    
                <path d={`
                    M${1800 + beamWidth} 50
                    L${1800 + beamWidth} 2400
                    L${1800} 2400
                    L${1800} 1050
                    L${1800 + 9} 1050
                    L${1800 + 9} 50Z
                `}  //  right
                    fill="none" stroke="white" strokeWidth="5"
                />
    
                <path d={`
                    M${1806} 2400
                    L${1806} 1050
                `}  //  invisible lines left
                    fill="none" stroke="white" strokeWidth="2"
                />
            </>
        )
    }

    return (
        <>
            {/* front--------- */}
            {beams}
            <path d={`
                M${1006} 50
                L${1006} 2400
            `}  //  invisible lines left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${1800 + beamWidth - 6} 50
                L${1800 + beamWidth - 6} 2400
            `}  //  invisible lines right
                fill="none" stroke="white" strokeWidth="2"
            />


            {/* left------ */}
            <path d={`
                M${2500} 50
                L${2500 + beamWidth1} 50
                L${2500 + beamWidth1} 2400
                L${2500} 2400Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2506} 50
                L${2506} 2400
            `}  //  invisible lines left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2500 + beamWidth1 - 6} 50
                L${2500 + beamWidth1 - 6} 2400
            `}  //  invisible lines right
                fill="none" stroke="white" strokeWidth="2"
            />
        </>
    )
}