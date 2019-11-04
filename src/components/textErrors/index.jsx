import React from 'react';


const Error = ({ text, textColor }) => {
    return (
        <p className="text-errors" style={{ color: textColor }}>{text}</p>
    )
}

export default Error;