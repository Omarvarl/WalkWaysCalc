export default function ConnectingPlate(beamTyape) {
    let beamHeight = 150
    if (beamTyape !== 'Швеллер 150x50x6') beamHeight = 180
    
    return (
        <>
            <path d={`
                M50 ${1033 + beamHeight}
                L0 ${1033 + beamHeight}
                L0 ${1033 + beamHeight + 110}
                L50 ${1033 + beamHeight + 110}Z
            `}
                fill="none" stroke="white" strokeWidth="5"
            />
            <circle cx={25} cy={1058 + beamHeight} r={13/2}
                fill="none" stroke="white" strokeWidth="5"
            />
            <circle cx={25} cy={1118 + beamHeight} r={13/2}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}