import React from 'react';

const Topping = (props) => {
    console.log(props)
    return(
        <li onClick={() => props.myClickFunction(props.type)}>{props.type}</li>
    )
}

export default Topping;