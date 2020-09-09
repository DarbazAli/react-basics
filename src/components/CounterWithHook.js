



import React, { useState } from 'react'

const CounterWithHook = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>React Counter with Hooks</h4>

            <h1><b>{count}</b></h1>

            <button className="button-primary" onClick={() => setCount(count - 1)}>-</button>
            <button className="button-primary" onClick={() => setCount(0)}>RESET</button>
            <button className="button-primary" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default CounterWithHook
