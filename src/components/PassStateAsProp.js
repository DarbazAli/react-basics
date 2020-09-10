import React, { useState } from 'react'



const Navbar = ({name}) => {
    return(
        <h4>Hello {name}</h4>
    )
}


const PassStateAsProp = () => {
    const [name, setName] = useState('Unknown');
    return (
        <div>
            <Navbar name={name} />
        </div>
    )
}



export default PassStateAsProp
