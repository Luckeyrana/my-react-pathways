import React from 'react';
import { useState } from 'react';

export function Counter(){
    const [count, setCount] = useState(0);

    const handleClick= ()=>{
        setCount(count + 1);
    }
    const handleClickDecrement=()=>{
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>&nbsp;
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    )
}