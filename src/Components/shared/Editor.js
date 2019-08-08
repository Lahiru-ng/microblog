import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ text, type, onChange }) => {
    return (
        <textarea onChange={onChange} className={`txt txt-${type}`}>
            {text}
        </textarea>
    );

};



Editor.prototype = {
    text: PropTypes.string,
    type: PropTypes.type,
    onClick: PropTypes.func
}

export default Editor;

