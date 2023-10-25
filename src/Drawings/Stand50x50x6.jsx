export default function StartStand50x50x6(length, lengths) {
    let result = []
    let count = 0
    lengths.forEach(len => {
        result.push(
            <g key={'stand_' + count}>
                <path d={`M${len} 80L${len} 1313L${len + 50} 1313L${len + 50} 80Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`M${len + 7} 80L${len + 6} 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`M${len + 43} 80L${len + 43} 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </g>
        )
        count++
    })
    return (
        <>
            <path d={`M${length} 50L${length} 1313L${length + 50} 1313L${length + 50} 80L${length + 25} 80L${length + 25} 50Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${length + 7} 50L${length + 6} 1173Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`M${length + 43} 80L${length + 43} 1173Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            {result}
            <>
                <path d={`M2306 55L2306 1313L2356 1313L2356 55Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`M2313 55L2313 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`M2349 55L2349 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </>

            <>
                <path d={`M3156 55L3156 1313L3206 1313L3206 55Z`}
                    fill="none" stroke="white" strokeWidth="5"
                />
                <path d={`M3163 55L3163 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <path d={`M3199 55L3199 1313Z`}
                    fill="none" stroke="white" strokeWidth="2"
                />
            </>
         </>
    )
}