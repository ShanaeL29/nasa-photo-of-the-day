import React from 'react'

function Date(props) {
    const { date } = props;

    return (
        <div>
            <h1>{date}</h1>
        </div>
    )
}

export default Date;