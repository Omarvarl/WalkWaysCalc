export default function Floor(standType) {
    let standWidth = 50
    let standWidth1 = 50
    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }

    let floorsEnds = [750, 1450, 2050]
    let floors = []
    let prev = 50
    let count = 1

    floorsEnds.forEach(elm => {
        floors.push(
            <g key={`floor_${count}`}>
                <path d={`
                M${prev + standWidth} 1125
                L${elm} 1125
                L${elm} 1163
                L${prev + standWidth} 1163Z
            `}
                fill="none" stroke="white" strokeWidth="5"
                />
            </g>
        )
        count++
        prev = elm
    })

    return (
        <>
        {/* front------------- */}
            {floors}
            {/* left------ */}
            <path d={`
                M${2306 + standWidth1} 1125
                L${2306 + standWidth1 + 800} 1125
                L${2306 + standWidth1 + 800} 1163
                L${2306 + standWidth1} 1163Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}