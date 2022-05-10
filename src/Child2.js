import React,{ useReducer }  from 'react';
import CounterReducer from "./CounterReducer";

const Child2 = () =>{
    // using reducer
    let [state, dispatch] = useReducer(CounterReducer, 1);

    return(
        <div>
            <h2>Child2 is {state}</h2>
            <button onClick={()=>dispatch('INCREMENT') }>
                Increment Reducer
            </button>
        </div>
    )
}

export default Child2;