export default function StairJoints(beamType, stairType) {

    let beamWidth = 58
    let beamWidth1 = 88

    if (beamType === 'Профиль 50x50x6') {
        beamWidth = 50
        beamWidth1 = 50
    }

    let point = 1066
    let count = 0
    let stepsJoints = []

    let safeBox = ''

    if (stairType === 'С защитным коробом') safeBox = (
        <g>
            {/* front---------- */}
            <circle cx={1000 + beamWidth / 2 + 40} cy={120} r={12}  //  washer left up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1000 + beamWidth / 2 + 40} cy={120} r={8}  //  bolt left up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1000 + beamWidth / 2 + 40} cy={980} r={12}  //  washer left down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1000 + beamWidth / 2 + 40} cy={980} r={8}  //  bolt left down
                fill="none" stroke="white" strokeWidth="3"
            />


            <circle cx={1800 + beamWidth / 2 - 40} cy={120} r={12}  //  washer right up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1800 + beamWidth / 2 - 40} cy={120} r={8}  //  bolt right up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1800 + beamWidth / 2 - 40} cy={980} r={12}  //  washer right down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1800 + beamWidth / 2 - 40} cy={980} r={8}  //  bolt right down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1400 + beamWidth / 2} cy={120} r={12}  //  washer middle up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1400 + beamWidth / 2} cy={120} r={8}  //  bolt middle up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1400 + beamWidth / 2} cy={980} r={12}  //  washer middle down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1400 + beamWidth / 2} cy={980} r={8}  //  bolt middle down
                fill="none" stroke="white" strokeWidth="3"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 10} ${100}
                L${1000 + beamWidth / 2 + 10} ${100}
                L${1000 + beamWidth / 2 + 10} ${100 - 14}
                L${1000 + beamWidth / 2 - 10} ${100 - 14}Z
            `}  //  bolt head left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 10} ${140}
                L${1000 + beamWidth / 2 + 10} ${140}
                L${1000 + beamWidth / 2 + 10} ${140 + 14}
                L${1000 + beamWidth / 2 - 10} ${140 + 14}Z
            `}  //  nut left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 6} ${140 + 14}
                L${1000 + beamWidth / 2 + 6} ${140 + 14}
                L${1000 + beamWidth / 2 + 6} ${140 + 28}
                L${1000 + beamWidth / 2 - 6} ${140 + 28}Z
            `}  //  bolt tail left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 10} ${960}
                L${1000 + beamWidth / 2 + 10} ${960}
                L${1000 + beamWidth / 2 + 10} ${960 - 14}
                L${1000 + beamWidth / 2 - 10} ${960 - 14}Z
            `}  //  bolt head left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 10} ${1000}
                L${1000 + beamWidth / 2 + 10} ${1000}
                L${1000 + beamWidth / 2 + 10} ${1000 + 14}
                L${1000 + beamWidth / 2 - 10} ${1000 + 14}Z
            `}  //  nut left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth / 2 - 6} ${1000 + 14}
                L${1000 + beamWidth / 2 + 6} ${1000 + 14}
                L${1000 + beamWidth / 2 + 6} ${1000 + 28}
                L${1000 + beamWidth / 2 - 6} ${1000 + 28}Z
            `}  //  bolt tail left down
                fill="none" stroke="white" strokeWidth="5"
            />



            <path d={`
                M${1800 + beamWidth / 2 - 10} ${100}
                L${1800 + beamWidth / 2 + 10} ${100}
                L${1800 + beamWidth / 2 + 10} ${100 - 14}
                L${1800 + beamWidth / 2 - 10} ${100 - 14}Z
            `}  //  bolt head right up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 10} ${140}
                L${1800 + beamWidth / 2 + 10} ${140}
                L${1800 + beamWidth / 2 + 10} ${140 + 14}
                L${1800 + beamWidth / 2 - 10} ${140 + 14}Z
            `}  //  nut right up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 6} ${140 + 14}
                L${1800 + beamWidth / 2 + 6} ${140 + 14}
                L${1800 + beamWidth / 2 + 6} ${140 + 28}
                L${1800 + beamWidth / 2 - 6} ${140 + 28}Z
            `}  //  bolt tail right up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 10} ${960}
                L${1800 + beamWidth / 2 + 10} ${960}
                L${1800 + beamWidth / 2 + 10} ${960 - 14}
                L${1800 + beamWidth / 2 - 10} ${960 - 14}Z
            `}  //  bolt head right down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 10} ${1000}
                L${1800 + beamWidth / 2 + 10} ${1000}
                L${1800 + beamWidth / 2 + 10} ${1000 + 14}
                L${1800 + beamWidth / 2 - 10} ${1000 + 14}Z
            `}  //  nut right down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth / 2 - 6} ${1000 + 14}
                L${1800 + beamWidth / 2 + 6} ${1000 + 14}
                L${1800 + beamWidth / 2 + 6} ${1000 + 28}
                L${1800 + beamWidth / 2 - 6} ${1000 + 28}Z
            `}  //  bolt tail right down
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left view----------- */}
            <circle cx={2500 + beamWidth1 / 2} cy={120} r={12}  //  washer beam up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 / 2} cy={120} r={8}  //  bolt beam up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 / 2} cy={980} r={12}  //  washer beam down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 / 2} cy={980} r={8}  //  bolt beam down
                fill="none" stroke="white" strokeWidth="3"
            />



            <circle cx={2500 + beamWidth1 + 284} cy={120} r={12}  //  washer cross up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 + 284} cy={120} r={8}  //  bolt cross up
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 + 284} cy={980} r={12}  //  washer cross down
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 + 284} cy={980} r={8}  //  bolt cross down
                fill="none" stroke="white" strokeWidth="3"
            />


            <path d={`
                M${2500 + beamWidth1 + 586 - 10} ${100}
                L${2500 + beamWidth1 + 586 + 10} ${100}
                L${2500 + beamWidth1 + 586 + 10} ${100 - 14}
                L${2500 + beamWidth1 + 586 - 10} ${100 - 14}Z
            `}  //  bolt head up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 + 586 - 10} ${140}
                L${2500 + beamWidth1 + 586 + 10} ${140}
                L${2500 + beamWidth1 + 586 + 10} ${140 + 14}
                L${2500 + beamWidth1 + 586 - 10} ${140 + 14}Z
            `}  //  nut up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 + 586 - 6} ${140 + 14}
                L${2500 + beamWidth1 + 586 + 6} ${140 + 14}
                L${2500 + beamWidth1 + 586 + 6} ${140 + 28}
                L${2500 + beamWidth1 + 586 - 6} ${140 + 28}Z
            `}  //  bolt tail up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 + 586 - 10} ${960}
                L${2500 + beamWidth1 + 586 + 10} ${960}
                L${2500 + beamWidth1 + 586 + 10} ${960 - 14}
                L${2500 + beamWidth1 + 586 - 10} ${960 - 14}Z
            `}  //  bolt head down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 + 586 - 10} ${1000}
                L${2500 + beamWidth1 + 586 + 10} ${1000}
                L${2500 + beamWidth1 + 586 + 10} ${1000 + 14}
                L${2500 + beamWidth1 + 586 - 10} ${1000 + 14}Z
            `}  //  nut down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 + beamWidth1 + 586 - 6} ${1000 + 14}
                L${2500 + beamWidth1 + 586 + 6} ${1000 + 14}
                L${2500 + beamWidth1 + 586 + 6} ${1000 + 28}
                L${2500 + beamWidth1 + 586 - 6} ${1000 + 28}Z
            `}  //  bolt tail down
                fill="none" stroke="white" strokeWidth="5"
            />
            
        </g>
    )

    while (point < 2400) {
        stepsJoints.push(
            <g key={`stepsJoints_${count}`}>
                {/* front left--------- */}
                <circle cx={1000 + beamWidth / 2} cy={point} r={12}  //  washer
                    fill="none" stroke="white" strokeWidth="3"
                />

                <circle cx={1000 + beamWidth / 2} cy={point} r={8}  //  bolt
                    fill="none" stroke="white" strokeWidth="3"
                />
                {/* front right----------- */}
                <circle cx={1800 + beamWidth / 2} cy={point} r={12}  //  washer
                    fill="none" stroke="white" strokeWidth="3"
                />

                <circle cx={1800 + beamWidth / 2} cy={point} r={8}  //  bolt
                    fill="none" stroke="white" strokeWidth="3"
                />

                {/* left---------- */}
                <path d={`
                    M${2500 + beamWidth1} ${point - 10}
                    L${2500 + beamWidth1 + 14} ${point - 10}
                    L${2500 + beamWidth1 + 14} ${point + 10}
                    L${2500 + beamWidth1} ${point + 10}Z
                `}  //  bolt heads
                    fill="none" stroke="white" strokeWidth="5"
                />

                <path d={`
                    M${2500} ${point - 10}
                    L${2500 - 14} ${point - 10}
                    L${2500 - 14} ${point + 10}
                    L${2500} ${point + 10}Z
                `}  //  nuts
                    fill="none" stroke="white" strokeWidth="5"
                />

                <path d={`
                    M${2500 - 14} ${point - 6}
                    L${2500 - 28} ${point - 6}
                    L${2500 - 28} ${point + 6}
                    L${2500 - 14} ${point + 6}Z
                `}  //  bolts tales
                    fill="none" stroke="white" strokeWidth="5"
                />
            </g>
        )
        count++
        point += 300
    }

    return (
        <>
            {/* front--------- */}
            {safeBox}
            {stepsJoints}
            {/* corner left-------------- */}
            <circle cx={1000 + beamWidth / 2} cy={2350} r={12}  //  washer
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1000 + beamWidth / 2} cy={2350} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />

            {/* corner right-------------- */}
            <circle cx={1800 + beamWidth / 2} cy={2350} r={12}  //  washer
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={1800 + beamWidth / 2} cy={2350} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            {/* bracket------- */}
            <path d={`
                M${1000 + beamWidth + 6} ${1150 - 10}
                L${1000 + beamWidth + 6 + 14} ${1150 - 10}
                L${1000 + beamWidth + 6 + 14} ${1150 + 10}
                L${1000 + beamWidth + 6} ${1150 + 10}Z
            `}  //  bolt head left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 + beamWidth + 6} ${1200 - 10}
                L${1000 + beamWidth + 6 + 14} ${1200 - 10}
                L${1000 + beamWidth + 6 + 14} ${1200 + 10}
                L${1000 + beamWidth + 6} ${1200 + 10}Z
            `}  //  bolt head left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000} ${1150 - 10}
                L${1000 - 14} ${1150 - 10}
                L${1000 - 14} ${1150 + 10}
                L${1000} ${1150 + 10}Z
            `}  //  nut left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000} ${1200 - 10}
                L${1000 - 14} ${1200 - 10}
                L${1000 - 14} ${1200 + 10}
                L${1000} ${1200 + 10}Z
            `}  // nut left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 - 14} ${1150 - 6}
                L${1000 - 28} ${1150 - 6}
                L${1000 - 28} ${1150 + 6}
                L${1000 - 14} ${1150 + 6}Z
            `}  //  bolt tale left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1000 - 14} ${1200 - 6}
                L${1000 - 28} ${1200 - 6}
                L${1000 - 28} ${1200 + 6}
                L${1000 - 14} ${1200 + 6}Z
            `}  // bolt tale left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 - 6} ${1150 - 10}
                L${1800 - 6 - 14} ${1150 - 10}
                L${1800 - 6 - 14} ${1150 + 10}
                L${1800 - 6} ${1150 + 10}Z
            `}  //  bolt head right up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 - 6} ${1200 - 10}
                L${1800 - 6 - 14} ${1200 - 10}
                L${1800 - 6 - 14} ${1200 + 10}
                L${1800 - 6} ${1200 + 10}Z
            `}  //  bolt head right down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth} ${1150 - 10}
                L${1800 + beamWidth + 14} ${1150 - 10}
                L${1800 + beamWidth + 14} ${1150 + 10}
                L${1800 + beamWidth} ${1150 + 10}Z
            `}  //  nut left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth} ${1200 - 10}
                L${1800 + beamWidth + 14} ${1200 - 10}
                L${1800 + beamWidth + 14} ${1200 + 10}
                L${1800 + beamWidth} ${1200 + 10}Z
            `}  // nut left down
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth + 14} ${1150 - 6}
                L${1800 + beamWidth + 28} ${1150 - 6}
                L${1800 + beamWidth + 28} ${1150 + 6}
                L${1800 + beamWidth + 14} ${1150 + 6}Z
            `}  //  bolt tale left up
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${1800 + beamWidth + 14} ${1200 - 6}
                L${1800 + beamWidth + 28} ${1200 - 6}
                L${1800 + beamWidth + 28} ${1200 + 6}
                L${1800 + beamWidth + 14} ${1200 + 6}Z
            `}  // bolt tale left down
                fill="none" stroke="white" strokeWidth="5"
            />


            {/* left------------- */}
            {/* corner-------- */}
            <path d={`
                M${2500 + beamWidth1 + 6} ${2350 - 10}
                L${2500 + beamWidth1 + 6 + 14} ${2350 - 10}
                L${2500 + beamWidth1 + 6 + 14} ${2350 + 10}
                L${2500 + beamWidth1 + 6} ${2350 + 10}Z
            `}  //  bolt head
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500} ${2350 - 10}
                L${2500 - 14} ${2350 - 10}
                L${2500 - 14} ${2350 + 10}
                L${2500} ${2350 + 10}Z
            `}  //  nut
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`
                M${2500 - 14} ${2350 - 6}
                L${2500 - 28} ${2350 - 6}
                L${2500 - 28} ${2350 + 6}
                L${2500 - 14} ${2350 + 6}Z
            `}  //  bolt tale
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* bracket--------- */}
            <circle cx={2500 - 165} cy={1145} r={12}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 - 165} cy={1145} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 - 165} cy={1205} r={12}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 - 165} cy={1205} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />

            <circle cx={2500 + beamWidth1 / 2} cy={1145} r={12}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 + beamWidth1 / 2} cy={1145} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 + beamWidth1 / 2} cy={1205} r={12}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2500 + beamWidth1 / 2} cy={1205} r={8}  //  bolt
                fill="none" stroke="white" strokeWidth="3"
            />

        </>
    )
}