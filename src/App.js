import React from 'react';
import './App.css';
// import Child from './Child';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  return (
    // wraping 
    <CounterContext.Provider value={1}>
      <div className='App'>      
        <Parent />
        
      </div>   
    </CounterContext.Provider>
  );
}

export default App;
