import React, { useState } from 'react'

export default function Age() {
    const [age, setAge] = useState(19)
    const [sibling, setSiblingsNum] = useState(10)
    const handleClick = () => {
        setAge(age + 1)
    }
    const handleSiblingsNum = () => {
        setSiblingsNum(sibling + 1)
    }
    return (
        <div>
            <p>Today I am {age} Years old</p>
            <button onClick={handleClick} >Get Older!</button>
            <p>I have {sibling} siblings</p>
            <button onClick={handleSiblingsNum}>Add more siblings</button>
        </div >
    )
}
