import React from 'react';
// using props
function Dinner (props){
    return(
        <div>
            <h1>Today we are serving {props.dishName}</h1>
            <h1>Today we are also serving sweet dishes {props.sweetDish}</h1>
        </div>
    )

}

export default Dinner;