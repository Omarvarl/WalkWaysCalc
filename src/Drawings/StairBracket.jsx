export default function StairStepType(beamType) {
    let beamWidth = 58

    return (
        <>
        {/* front----------- */}
            <path d={`
                M${1000 + beamWidth} 1109
                A9 9 -45 0 1 ${1000 + beamWidth + 9} 1100
                L${1000 + beamWidth  + 50} 1100
                L${1000 + beamWidth  + 50} 1106
                L${1000 + beamWidth + 6} 1106
                L${1000 + beamWidth + 6} 1244
                L${1000 + beamWidth + 50} 1244
                L${1000 + beamWidth + 50} 1250
                L${1000 + beamWidth + 9} 1250
                A9 9 45 0 1 ${1000 + beamWidth} 1241Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />
            <path d={`
                M${1800} 1109
                A9 9 45 0 1 ${1800 - 9} 1100
                L${1800 - 50} 1100
                L${1800 - 50} 1106
                L${1800 - 6} 1106
                L${1800 - 6} 1244
                L${1800 - 50} 1244
                L${1800 - 50} 1250
                L${1800 - 9} 1250
                A9 9 -45 0 1 ${1800} 1241Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />

            {/* corner left----------- */}
            <path d={`
                M${1000 + beamWidth + 6} 1115
                L${1000 + beamWidth + 6 + 75} 1115
                L${1000 + beamWidth + 6 + 75} 1235
                L${1000 + beamWidth + 6} 1235Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth + 6 + 6} 1115
                L${1000 + beamWidth + 6 + 6} 1235
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <circle cx={1000 + beamWidth + 6 + 75 / 2} cy={1145} r={7}  //  up hole
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1000 + beamWidth + 6 + 75 / 2} cy={1235 - 30} r={7}  //  down hole
                fill="none" stroke="white" strokeWidth="3"
            />

            {/* corner right----------- */}
            <path d={`
                M${1800 - 6} 1115
                L${1800 - 6 - 75} 1115
                L${1800 - 6 - 75} 1235
                L${1800 - 6} 1235Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 - 6 - 6} 1115
                L${1800 - 6 - 6} 1235
            `}
                fill="none" stroke="white" strokeWidth="5"
            />

            <circle cx={1800 - 6 - 75 / 2} cy={1145} r={7}  //  up hole
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1800 - 6 - 75 / 2} cy={1235 - 30} r={7}  //  down hole
                fill="none" stroke="white" strokeWidth="3"
            />

            
            {/* left--------------- */}
            <path d={`
                M${2500 - 200} 1100
                L${2500} 1100
                L${2500} 1250
                L${2500 - 200} 1250Z
            `}
                fill="none" stroke="white" strokeWidth="6"
            />

            <path d={`
                M${2500 - 200} 1109
                L${2500} 1109
            `}  //  invisible lines up
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2500 - 200} 1241
                L${2500} 1241
            `}  //  invisible lines down
                fill="none" stroke="white" strokeWidth="2"
            />
        </>
    )
}