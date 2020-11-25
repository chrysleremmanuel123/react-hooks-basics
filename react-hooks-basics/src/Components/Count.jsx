import React, { useState } from 'react'


export default function Count() {
    const [count, setCount] = useState(0)
    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p>The count Value is:{count}</p>
            <button onClick={() => setCount(0)}>RESET</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Plus(+)</button>
            <button onClick={handleSubtract}>Minus(-)</button>
        </div>
    )
}
