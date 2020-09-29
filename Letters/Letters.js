import React from 'react';

const letter = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.userInput} />
        </div>
    )
}

export default letter;