import React from 'react'

function Explanation(props) {
    const { explanation } = props;

    return (
        <div>
            <h1>{explanation}</h1>
        </div>
    )
}

export default Explanation;