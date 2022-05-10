import React,{useState} from 'react';
import './App.css';
import Dinner from './dinner.js';
import dinnerUseContext from './dinnerUseContext';

function App() {
  let count =useState(1)
  
  return (
  <dinnerUseContext.Provider  value={count}>
    <div className='App'>
      <Dinner/>  
    </div>   
  </dinnerUseContext.Provider>
  );
}

export default App;
