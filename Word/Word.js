import React from 'react';

const word = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.userInput} />
            <p>{props.userInput}</p>
        </div>
    )
}

export default word;