export default function Floor(length1, length2, p1, p2, p3) {

    return (
        <>
        {/* front------------- */}
        <path d={`M${p1} 1125L${p1 + length1} 1125Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p1} 1163L${p1 + length1} 1163Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`M${p2} 1125L${p2 + length1} 1125Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p2} 1163L${p2 + length1} 1163Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`M${p3} 1125L${p3 + length2} 1125Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
            <path d={`M${p3} 1163L${p3 + length2} 1163Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            <path d={`M${p3 + length2} 1125L${p3 + length2} 1163Z`}
                fill="none" stroke="white" strokeWidth="5"
            />

            {/* left------ */}
            <path d={`M2356 1125L3156 1125L3156 1163L2356 1163Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}