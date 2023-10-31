export default function ConnectingTube(standType, crossbarQuantity, fillingType) {
    let crossbarPoint = 1200 / (crossbarQuantity + 1)
    let standWidth = 50
    if (standType === 'Профиль 88x58x5') {
        standWidth = 58
    }
    let tubes = []
    let point = crossbarPoint
    let count = 0

    if (fillingType === 'Трехбалка') {
        point = 200
        crossbarPoint = 800
    }

    while (point < 1200) {

        tubes.push(
            <g key={`tubes_${count}`}>
                {/* front---------- */}
                <path d={`
                    M50 ${point - 16}
                    L0 ${point - 16}
                    L0 ${point + 16}
                    L50 ${point + 16}
                `}
                    fill="none" stroke="white" strokeWidth="5"
                />

                {/* left------ */}
                <circle cx={2306 + standWidth / 2} cy={point} r={16}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <circle cx={2306 + standWidth / 2} cy={point} r={13}
                    fill="none" stroke="white" strokeWidth="5"
                />

                <circle cx={2306 + standWidth / 2 + 800 + standWidth} cy={point} r={16}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <circle cx={2306 + standWidth / 2 + 800 + standWidth} cy={point} r={13}
                    fill="none" stroke="white" strokeWidth="5"
                />
            </g>
        )
        count++
        point += crossbarPoint
    }

    return (
        <>
            {tubes}
        </>
    )
}