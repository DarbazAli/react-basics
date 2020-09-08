import React from 'react'
import PropTypes from 'prop-types';

const Camper = ({name}) => {
    return(
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
const CompReview = () => {
    return (
        <div>
            <Camper/>
        </div>
    )
}


// Defautl prop for Camper
Camper.defaultProps = {
    name: 'CamperBot'
}

// Prop Validation for Camper
Camper.propTypes = {
    name: PropTypes.string.isRequired
}

export default CompReview
