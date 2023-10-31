export default function Corner75x75x6(standType, beamType) {
    let standWidth = 50
    let beamWallWidth = 6
    if (beamType === 'Профиль 180x60x8') beamWallWidth = 60
    if (standType === 'Профиль 88x58x5') standWidth = 58
    return (
        <>
            {/* left------ */}
            <path d={`
                M${2306 + standWidth + beamWallWidth} 1169
                L${2306 + standWidth + beamWallWidth + 75} 1169
                L${2306 + standWidth + beamWallWidth + 75} 1297
                L${2306 + standWidth + beamWallWidth} 1297Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth + beamWallWidth + 6} 1169
                L${2306 + standWidth + beamWallWidth + 6} 1297Z
            `}
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`
                M${2306 + standWidth + 800 - beamWallWidth} 1169
                L${2306 + standWidth + 800 - beamWallWidth - 75} 1169
                L${2306 + standWidth + 800 - beamWallWidth - 75} 1297
                L${2306 + standWidth + 800 - beamWallWidth} 1297Z
            `}  //  right
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${2306 + standWidth + 800 - beamWallWidth - 6} 1169
                L${2306 + standWidth + 800 - beamWallWidth - 6} 1297Z
            `}
                fill="none" stroke="white" strokeWidth="2"
            />
        </>
    )
}