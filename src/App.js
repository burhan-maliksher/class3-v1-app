import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className='App'>
      <Dinner dishName="Nihaari"  sweetDish="kheer"/>
      <hr/>
      <Dinner dishName="Biryani"  sweetDish="Jaleebi"/>
      <hr/> 
      <Dinner dishName="Karahi"  sweetDish="Gajar ka halwa"/>
      <hr/>
    </div>   
  );
}

export default App;
