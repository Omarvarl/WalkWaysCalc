export default function Crossbar(point, length) {

    return (
        <>
            <path d={`M${point} 585L${point + length} 585L${point + length} 625L${point} 625Z`}
                fill="none" stroke="white" strokeWidth="5"
            />
        </>
    )
}