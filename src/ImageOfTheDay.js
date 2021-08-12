
import React, { useEffect } from 'react';

function ImageOfTheDay (props) {
    // const { image } = props;

    return(
        <div>
            <img src={props.image}/>
        </div>
    )
}

export default ImageOfTheDay