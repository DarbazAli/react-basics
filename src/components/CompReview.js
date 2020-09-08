'use strict'

import React from 'react'
import PropTypes from 'prop-types';
const Camper = ({name}) => {
    return (
        <div>
            <h3>Hello {name}</h3>
        </div>
    )
}
const CampSite = () => {
    return (
        <div>
            <Camper 
                // name='Darbaz'
            />
        </div>
    )
}


Camper.defaultProps = {
    name: 'CamperBot'
}

Camper.propTypes = {
    name: PropTypes.string.isRequired
}

export default CampSite
