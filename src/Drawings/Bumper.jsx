export default function Bumper(standType) {
    let standWidth = 50
    let standWidth1 = 50
    if (standType === 'Профиль 88x58x5') {
        standWidth = 88
        standWidth1 = 58
    }
    let paltesEnds = [750, 1450, 2050 + standWidth / 2]
    let plates = []
    let prev = 50
    let count = 1
    paltesEnds.forEach(elm => {
        plates.push(<g key={`plate_${count}`}>
            <path d={`
            M${prev + standWidth} 1023
            L${elm} 1023
            L${elm} 1123
            L${prev + standWidth} 1123Z
        `}
                fill="none" stroke="white" strokeWidth="5"
            />
        </g>)
        count++
        prev = elm
    })
    return (
        <>
            {plates}

            {/* left------- */}
            <path d={`
                M${2306 + standWidth1} 1023
                L${2306 + standWidth1 + 3} 1023
                L${2306 + standWidth1 + 3} 1123
                L${2306 + standWidth1} 1123Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth1 + 797} 1023
                L${2306 + standWidth1 + 800} 1023
                L${2306 + standWidth1 + 800} 1123
                L${2306 + standWidth1 + 797} 1123Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}