import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
    return (
        <button onClick={onClick} classname={`btn btn-${type}`}>
            {text}
        </button>
    );

};

Button.prototype = {
    text: PropTypes.string,
    type: PropTypes.type,
    onClick: PropTypes.func.isRequired
}

Button.defaultprops={
    type:"submit"
}

export default Button;
