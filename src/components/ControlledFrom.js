import React, {useState} from 'react'

const ControlledFrom = () => {
    const [input, setInput] = useState('')
    const [submit, setSubmit] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(input)
    }
    return (
        <div>
            <p>Submited text: {submit}</p>
            <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}></input>
            <button>Sumbit</button>
            </form>
        </div>
    )
}

export default ControlledFrom
