import React,{useState} from 'react';
import './App.css';
// import Child from './Child';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  // using useState
  // let [count, setCount] = useState(31)
  let countState = useState(1)

  return (
    // wraping in useContext 
    <CounterContext.Provider value={countState}>
      <div className='App'>      
        <Parent />
        
      </div>   
    </CounterContext.Provider>
  );
}

export default App;
