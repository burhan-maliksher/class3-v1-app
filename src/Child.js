import React ,{useContext}from 'react';
import counterContext from './CounterContext';

const Child = ()=> {
    // using useContext
    let counterValue = useContext(counterContext)
    return(
        <div>
            <h2>Child name is {counterValue}</h2>
        </div>
    )
}

export default Child;