export default function Bumper(length1, length2, p1, p2, p3) {

    return (
        <>
            <path d={`M${p1} 1023L${p1 + length1} 1023Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p1} 1123L${p1 + length1} 1123Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p2} 1023L${p2 + length1} 1023Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p2} 1123L${p2 + length1} 1123Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3} 1023L${p3 + length2} 1023Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3} 1123L${p3 + length2} 1123Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3 + length2} 1123L${p3 + length2} 1023Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left------- */}
            <path d={`M2356 1023L2359 1023L2359 1123L2356 1123Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M3153 1023L3156 1023L3156 1123L3153 1123Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}