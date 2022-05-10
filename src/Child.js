import React ,{useContext}from 'react';
import counterContext from './CounterContext';

const Child = ()=> {
    // using useContext
    let counterValue = useContext(counterContext)
    return(
        <div>
            <h2>Child no is {counterValue[0]}</h2>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment
            </button>
        </div>
    )
}

export default Child;