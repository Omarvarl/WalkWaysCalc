export default function SafeBox(beamType) {
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
                M${1000 + beamWidth / 2 + 20} 50
                L${1000 + beamWidth / 2 + 20} 1050
                L${1000 + beamWidth / 2 + 60} 1050
                L${1000 + beamWidth / 2 + 60} 50Z
            `}  //  left
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 20} 50
                L${1800 + beamWidth / 2 - 20} 1050
                L${1800 + beamWidth / 2 - 60} 1050
                L${1800 + beamWidth / 2 - 60} 50Z
            `}  //  right
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1400 + beamWidth / 2 - 20} 50
                L${1400 + beamWidth / 2 - 20} 1050
                L${1400 + beamWidth / 2 + 20} 1050
                L${1400 + beamWidth / 2 + 20} 50Z
            `}  //  midle
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 20} 100
                L${1000 + beamWidth / 2 - 20} 140
                L${1000 + beamWidth / 2 + 20} 140
                L${1000 + beamWidth / 2 + 20} 100Z
            `}  //  cross left up
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${1000 + beamWidth / 2 - 18.5} 103
                L${1000 + beamWidth / 2 - 18.5} 147
                L${1000 + beamWidth / 2 + 18.5} 147
                L${1000 + beamWidth / 2 + 18.5} 103Z
            `}  //  cross left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 20} 100
                L${1800 + beamWidth / 2 - 20} 140
                L${1800 + beamWidth / 2 + 20} 140
                L${1800 + beamWidth / 2 + 20} 100Z
            `}  //  cross right up
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${1800 + beamWidth / 2 - 18.5} 103
                L${1800 + beamWidth / 2 - 18.5} 147
                L${1800 + beamWidth / 2 + 18.5} 147
                L${1800 + beamWidth / 2 + 18.5} 103Z
            `}  //  cross right up
                fill="none" stroke="white" strokeWidth="5"
            />


            <path d={`
                M${1000 + beamWidth / 2 - 20} 960
                L${1000 + beamWidth / 2 - 20} 1000
                L${1000 + beamWidth / 2 + 20} 1000
                L${1000 + beamWidth / 2 + 20} 960Z
            `}  //  cross left down
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${1000 + beamWidth / 2 - 18.5} 963
                L${1000 + beamWidth / 2 - 18.5} 997
                L${1000 + beamWidth / 2 + 18.5} 997
                L${1000 + beamWidth / 2 + 18.5} 963Z
            `}  //  cross left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 20} 960
                L${1800 + beamWidth / 2 - 20} 1000
                L${1800 + beamWidth / 2 + 20} 1000
                L${1800 + beamWidth / 2 + 20} 960Z
            `}  //  cross right down
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`
                M${1800 + beamWidth / 2 - 18.5} 963
                L${1800 + beamWidth / 2 - 18.5} 997
                L${1800 + beamWidth / 2 + 18.5} 997
                L${1800 + beamWidth / 2 + 18.5} 963Z
            `}  //  cross right down
                fill="none" stroke="white" strokeWidth="5"
            />



            <path d={`
                M${1000 + beamWidth / 2 + 60} 104
                L${1400 + beamWidth / 2 - 20} 104
            `}  //  crooss tube up up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1400 + beamWidth / 2 + 20} 104
                L${1800 + beamWidth / 2 - 60} 104
            `}  //  crooss tube up up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 + 60} 136
                L${1400 + beamWidth / 2 - 20} 136
            `}  //  cross tube up down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1400 + beamWidth / 2 + 20} 136
                L${1800 + beamWidth / 2 - 60} 136
            `}  //  cross tube up down
                fill="none" stroke="white" strokeWidth="5"
            />



            <path d={`
                M${1000 + beamWidth / 2 + 60} 964
                L${1400 + beamWidth / 2 - 20} 964
            `}  //  crooss tube up up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1400 + beamWidth / 2 + 20} 964
                L${1800 + beamWidth / 2 - 60} 964
            `}  //  crooss tube up up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 + 60} 996
                L${1400 + beamWidth / 2 - 20} 996
            `}  //  cross tube up down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1400 + beamWidth / 2 + 20} 996
                L${1800 + beamWidth / 2 - 60} 996
                L${1800 + beamWidth / 2 - 60} 996
            `}  //  cross tube up down
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left---------- */}
            <path d={`
                M${2500 + beamWidth1} 100
                L${2500 + beamWidth1 + 656} 100
                L${2500 + beamWidth1 + 656} 140
                L${2500 + beamWidth1} 140Z
            `}  //  crooss up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1} 960
                L${2500 + beamWidth1 + 656} 960
                L${2500 + beamWidth1 + 656} 1000
                L${2500 + beamWidth1} 1000Z
            `}  //  crooss down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 - 90 + 656} 50
                L${2500 + beamWidth1 - 50 + 656} 50
                L${2500 + beamWidth1 - 50 + 656} 100
                L${2500 + beamWidth1 - 90 + 656} 100Z
            `}  //  beam
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 - 90 + 656} 140
                L${2500 + beamWidth1 - 50 + 656} 140
                L${2500 + beamWidth1 - 50 + 656} 960
                L${2500 + beamWidth1 - 90 + 656} 960Z
            `}  //  beam
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 - 90 + 656} 1000
                L${2500 + beamWidth1 - 50 + 656} 1000
                L${2500 + beamWidth1 - 50 + 656} 1050
                L${2500 + beamWidth1 - 90 + 656} 1050Z
            `}  //  beam
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 - 90 + 356} 140
                L${2500 + beamWidth1 - 50 + 356} 140
                L${2500 + beamWidth1 - 50 + 356} 960
                L${2500 + beamWidth1 - 90 + 356} 960Z
            `}  //  beam
                fill="none" stroke="white" strokeWidth="5"
            />

            <circle cx={2500 + beamWidth1 - 70 + 656} cy={120} r={16}  //  bolt
                fill="none" stroke="white" strokeWidth="5"
            />
            <circle cx={2500 + beamWidth1 - 70 + 656} cy={120} r={13}  //  bolt
                fill="none" stroke="white" strokeWidth="5"
            />

            <circle cx={2500 + beamWidth1 - 70 + 656} cy={980} r={16}  //  bolt
                fill="none" stroke="white" strokeWidth="5"
            />
            <circle cx={2500 + beamWidth1 - 70 + 656} cy={980} r={13}  //  bolt
                fill="none" stroke="white" strokeWidth="5"
            />

        </>
    )
}