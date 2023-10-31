export default function FrameCrossbar(frameCrossbarType, standType, beamType) {
    let crossbarWidth = 74
    if (frameCrossbarType === 'Профиль 88x58x5') crossbarWidth = 88
    let standWidth = 50
    let beamWallWidth = 6
    if (beamType === 'Профиль 180x60x8') beamWallWidth = 60
    if (standType === 'Профиль 88x58x5') standWidth = 58

    return (
        <>
            <path d={`
                M${2306 + standWidth + beamWallWidth} 1163
                L${2306 + standWidth + 800 - beamWallWidth} 1163
            `}  //  up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2306 + standWidth + beamWallWidth} 1169
                L${2306 + standWidth + 800 - beamWallWidth} 1169
            `}  //  invisible up
                fill="none" stroke="white" strokeWidth="3"
            />
            <path d={`
                M${2306 + standWidth + beamWallWidth + 75} ${1163 + crossbarWidth}
                L${2306 + standWidth + 800 - beamWallWidth - 75} ${1163 + crossbarWidth}
            `}  //  down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2306 + standWidth + beamWallWidth + 75} ${1163 + crossbarWidth - 6}
                L${2306 + standWidth + 800 - beamWallWidth - 75} ${1163 + crossbarWidth - 6}
            `}  //  invisible down
                fill="none" stroke="white" strokeWidth="3"
            />
        </>
    )
}