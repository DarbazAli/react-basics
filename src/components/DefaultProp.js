import React from 'react'
import PropTypes from 'prop-types';
const DefaultProp = ({ age }) => {
    return (
        <div>
            <h3>Hello I&apos;m Darbaz and I&apos;m {age} years old.</h3>
        </div>
    )
}

DefaultProp.defaultProps = {
    age: 29
}

DefaultProp.propTypes = {
    age: PropTypes.number.isRequired
}
export default DefaultProp
