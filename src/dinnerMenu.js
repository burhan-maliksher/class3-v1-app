import React,{useReducer} from 'react';
import dinnerReducer from './dinnerReducer';

function DinnerMenu(){
    
    let dinnerValue= useReducer(dinnerReducer,0)
    return(
        <div>
            <h2>Today we are serving {dinnerValue}</h2>
            <br/>
            <button onClick={()=>{dispatch('Increment')}}>
                Increment
            </button>
        </div>
    )
}

export default DinnerMenu;