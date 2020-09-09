import React, {useState} from 'react'

const ControlledInputHooks = () => {
    const [input, setInput] = useState('enter text here');

    const handleChange = e => {
        setInput(e.target.value)
    }
    return (
        <div>
            <h3>{input}</h3>
            <label htmlFor="input">Enter some text</label>
            <input type="text" id="input" onChange={handleChange}></input>
        </div>
    )
}

export default ControlledInputHooks
