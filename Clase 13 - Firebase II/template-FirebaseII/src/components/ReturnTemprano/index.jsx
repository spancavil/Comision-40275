import React, { useState } from 'react'

const ReturnTemprano = ({condition2}) => {
    console.log(condition2)
    const [condition, setCondition] = useState(false);

    if (condition2) {
        return (
            <>
                <button 
                    onClick={()=> setCondition(value => !value)}
                >Change condition</button>
                <span>El estado de condition es: {condition.toString()}</span>
            </>
        )
    }

    return (
        <>
            <h3>La condicion 2 está en false</h3>
            <span>El estado de condition es: {condition.toString()}</span>
        </>
    )
}

export default ReturnTemprano