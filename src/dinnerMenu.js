import React,{useReducer} from 'react';
import dinnerReducer from './dinnerReducer';

function DinnerMenu(){
    
    let [state, dispatch]= useReducer(dinnerReducer,'spice')
    return(
        <div>
            <h2>Today we are serving<br/> {state} <br/>dishes in  dinner</h2>
            <br/>
            <button onClick={()=>dispatch('sweet')}>
                add sweet
            </button>
            <button onClick={()=>dispatch('juice')}>
                add juice
            </button>
            
        </div>
    )
}

export default DinnerMenu;