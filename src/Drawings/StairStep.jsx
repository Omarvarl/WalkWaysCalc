export default function StairStepType(stepType, beamType) {
    let beamWidth = 58
    let point = 1050
    let count = 0
    let steps = []

    while (point < 2400) {
        steps.push(
            <g key={`step_${count}`}>
                <path d={`
                    M${1000 + beamWidth} ${point}
                    L${1000  + 800} ${point}
                    L${1000 + 800} ${point + 32}
                    L${1000 + beamWidth} ${point + 32}Z
                `}
                    fill="none" stroke="white" strokeWidth="5"
                />
            </g>
        )

        if (stepType === 'Трубка рифленая d32') {
            steps.push(
                <g key={`invisibleLines_${count}`}>
                    <path d={`
                        M${1000 + beamWidth} ${point+ 10}
                        L${1000  + 800} ${point + 10}
                    `}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                    <path d={`
                        M${1000 + beamWidth} ${point+ 20}
                        L${1000  + 800} ${point + 20}
                    `}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>
            )
        }
        count++
        point += 300
    }

    return (
        <>
            {steps}
        </>
    )
}