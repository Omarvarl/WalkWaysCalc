export default function Joints(len1, length) {
    let other = []
    let count = 0
    // stands-------
    length.forEach(len => {
        other.push(
            <g key={'joint_' + count}>
                <circle cx={len+10} cy={65} r={7}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+10} cy={65} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <circle cx={len+40} cy={65} r={7}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+40} cy={65} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
        
                <circle cx={len+25} cy={605} r={7}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+25} cy={605} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <circle cx={len-25} cy={605} r={7}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len-25} cy={605} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
                <circle cx={len+75} cy={605} r={7}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+75} cy={605} r={3}
                    fill="none" stroke="white" strokeWidth="2"
                />
        
                <circle cx={len+25} cy={1208} r={37/2}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+25} cy={1208} r={10}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+25} cy={1268} r={37/2}
                    fill="none" stroke="white" strokeWidth="3"
                />
                <circle cx={len+25} cy={1268} r={10}
                    fill="none" stroke="white" strokeWidth="3"
                />
             </g>
        )
        count++
    })
    return (
        <>
        {/*   startstand---------- */}
            <circle cx={len1+40} cy={65} r={7}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={len1+40} cy={65} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={len1+25} cy={605} r={7}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={len1+25} cy={605} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={len1+75} cy={605} r={7}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={len1+75} cy={605} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M${len1 + 5} 1173L${len1 + 45} 1173Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${len1 + 5} 1178L${len1 + 45} 1178Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`M${len1 + 5} 1305L${len1 + 45} 1305Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${len1 + 5} 1302L${len1 + 45} 1302Z`}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={len1+25} cy={1208} r={10}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={len1+25} cy={1268} r={10}
                fill="none" stroke="white" strokeWidth="3"
            />
            {other}

            {/* left-------------- */}
            {/* corners-------- */}
            <circle cx={2402} cy={1187} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2402} cy={1187} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={2402} cy={1217} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={2402} cy={1217} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={3112} cy={1187} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={3112} cy={1187} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            <circle cx={3112} cy={1217} r={8}
                fill="none" stroke="white" strokeWidth="3"
            />
            <circle cx={3112} cy={1217} r={3}
                fill="none" stroke="white" strokeWidth="2"
            />

            {/* stands------ */}
            <path d={`M2306 1198L2292 1198L2292 1218L2306 1218Z`}  //  bolt head left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M2306 1258L2292 1258L2292 1278L2306 1278Z`}  //  bolt head left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3206 1198L3220 1198L3220 1218L3206 1218Z`}  //  bolt head right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3206 1258L3220 1258L3220 1278L3206 1278Z`}  //  bolt head right
                fill="none" stroke="white" strokeWidth="2"
            />


            <path d={`M2368 1198L2382 1198L2382 1218L2368 1218Z`} //  nut left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M2368 1258L2382 1258L2382 1278L2368 1278Z`}  // nut left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M2382 1203L2396 1203L2396 1213L2382 1213Z`}  //  bolt left
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M2382 1263L2396 1263L2396 1273L2382 1273Z`}  //  bolt left
                fill="none" stroke="white" strokeWidth="2"
            />


            <path d={`M3138 1198L3152 1198L3152 1218L3138 1218Z`}  // nut right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3138 1258L3152 1258L3152 1278L3138 1278Z`} //  nut right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3124 1203L3138 1203L3138 1213L3124 1213Z`}  // bolt right
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3124 1263L3138 1263L3138 1273L3124 1273Z`} //  bolt right
                fill="none" stroke="white" strokeWidth="2"
            />

            {/* floor------ */}
            <path d={`M2377 1125L2377 1111L2391 1111L2391 1125Z`}  //  left bolt
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M3118 1125L3118 1111L3132 1111L3132 1125Z`}  //  right bolt
                fill="none" stroke="white" strokeWidth="2"
            />
        </>
    )
}