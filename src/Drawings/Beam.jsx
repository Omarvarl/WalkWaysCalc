export default function Beam(length1, length2, p1, p2, p3) {

    return (
        <>
            <path d={`M${p1} 1161L${p1 + length1} 1161Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p1} 1170L${p1 + length1} 1170Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`M${p1} 1311L${p1 + length1} 1311Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p1} 1302L${p1 + length1} 1302Z`}
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M${p2} 1161L${p2 + length1} 1161Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p2} 1170L${p2 + length1} 1170Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`M${p2} 1311L${p2 + length1} 1311Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p2} 1302L${p2 + length1} 1302Z`}
                fill="none" stroke="white" strokeWidth="2"
            />

            <path d={`M${p3} 1161L${p3 + length2} 1161Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3} 1170L${p3 + length2} 1170Z`}
                fill="none" stroke="white" strokeWidth="2"
            />
            <path d={`M${p3} 1311L${p3 + length2} 1311Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3} 1302L${p3 + length2} 1302Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`M${p3 + length2} 1311L${p3 + length2} 1161Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            <circle cx={2025} cy={1208} r={13/2}
                fill="none" stroke="white" strokeWidth="5"
            />
            <circle cx={2025} cy={1268} r={13/2}
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left------ */}
            <path d={`M2356 1172A9 9 -45 0 1 2365 1163L2406 1163L2406 1169L2365 1169L2365 1307L2406 1307L2406 1313L2365 1313A9 9 45 0 1 2356 1304Z`}
                fill="none" stroke="white" strokeWidth="6"
            />
            <path d={`M3156 1172A9 9 45 0 1 3147 1163L3108 1163L3108 1169L3149 1169L3149 1307L3108 1307L3108 1313L3149 1313A9 9 -45 0 1 3156 1304Z`}
                fill="none" stroke="white" strokeWidth="6"
            />
        </>
    )
}