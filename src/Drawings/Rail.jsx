    
    export default function Rail(railType, standType) {
        let railHeight = 30
        let standWidth = 50
        let startX = 25
        if (standType === 'Профиль 88x58x5') {
            standWidth = 58
            startX = 44
        }
        let invisibleLines = [
            <g key={`ril_0`}>
                <path d={`M75 56L2075 56Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </g>
        ]
        let leftView = [
            <g key='leftRailViewL'>
                <path d="M2300 80L2300 55A5 5 -45 0 1 2305 50L2357 50A5 5 45 0 1 2362 55L2362 80L2357 80L2357 55L2305 55L2305 80Z"  //  left
                    fill="none" stroke="white" strokeWidth="5"
                />
            </g>,
            <g key='leftRailViewR'>
                <path d="M3150 80L3150 55A5 5 -45 0 1 3155 50L3207 50A5 5 45 0 1 3212 55L3212 80L3207 80L3207 55L3155 55L3155 80Z"  //  right
                    fill="none" stroke="white" strokeWidth="5"
                />
            </g>
        ]

        function getLEftViewPath(initX) {
            return `
            M${initX} 55
            A5 5 -45 0 1 ${initX + 5} 50
            L${initX + 83} 50
            A5 5 45 0 1 ${initX + 88} 55
            L${initX + 88} 103
            A5 5 -45 0 1 ${initX + 83} 108
            L${initX + 88 - (88 - standWidth)/2 + 1} 108
            L${initX + 88 - (88 - standWidth)/2 + 1} 103
            L${initX + 83} 103
            L${initX + 83} 55
            L${initX + 5} 55
            L${initX + 5} 103
            L${initX + (88 - standWidth)/2 - 1} 103
            L${initX + (88 - standWidth)/2 - 1} 108
            L${initX + 5} 108
            A5 5 45 0 1 ${initX} 103Z`
        }
  
        if (railType === 'Профиль 88x58x5') {
            railHeight = 58
            invisibleLines = [
                <g key={`ril_0`}>
                    <path d={`M${50 + startX} 56L${2050 + startX} 56Z`}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>,
                <g key={`ril_1`}>
                <path d={`M${50 + startX} 102L${2050 + startX} 102Z`}
                        fill="none" stroke="white" strokeWidth="2"
                    />
                </g>
            ]

            leftView = [
                <g key='leftRailViewL'>
                    <path d={
                        getLEftViewPath(2306 + standWidth / 2 - 44)
                    }  
                        fill="none" stroke="white" strokeWidth="5"
                    />
                </g>,
                <g key='leftRailViewR'>
                    <path d={
                        getLEftViewPath(2306 + (800 + standWidth) + standWidth / 2 - 44)
                    }  
                        fill="none" stroke="white" strokeWidth="5"
                    />
                </g>
            ]
        }

        return (
            <>
            {/* contour----------------- */}
                <path d={`
                M${50 +startX} 50
                L${2050 + startX} 50
                L${2050 + startX} ${50 + railHeight}
                L${50 +startX} ${50 + railHeight}Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                {invisibleLines}
            {/* left------------ */}
                {leftView}
            </>
        )
    }
