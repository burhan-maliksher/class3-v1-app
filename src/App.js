import React,{useState} from 'react';
import {Message} from './Message.js';
import './App.css';
import Dinner from './dinner.js';

function App() {
  // using useState hook
  // hooks are only used in function not in classes
  let [count,setCount]=useState(0)
  // useState value can be of any type ex:useState{true} for boolean etc
  let [isMorning, setMorning]=useState(true)
  return (
    // in line 14 we use backtick which allows to use miltiple line string
    <div className={`App ${isMorning ? 'daylight': 'night'}`}>
      {/* using ternary operator an alternative to if else or switch statement */}
      <h2>Day time = {isMorning ? 'Morning': 'Night'}</h2>
      <br/>
      <button onClick={()=> setMorning(!isMorning) }>
        set Day time
      </button>
      <br/>
      {/* using props instead of h3 used in line no 21 */}
      <Message Counter={count} />
      {/* 
      <h3>variable value is :{count}</h3> */
      }
      <br/>
      {/* using ascronyse funtion{functions without any name} on onClick */}
      
      <button onClick={()=> setCount(++count)}>
        click to add 1
      </button>
      
      <button onClick={ ()=> setCount(--count)}>
        click to subtract 1
      </button>
    </div>   
  );
}
// default export allows to import that function with any name ex:App or App1 etc.
// but expot allows to import with that spacific fuction name with {} on the both sides ex:{App}
export default App;
