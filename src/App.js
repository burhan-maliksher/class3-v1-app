import React from 'react';
import './App.css';
import Dinner from './dinner.js';
import Burhan from './burhan.js';

function App() {
  return (
    <div className='App'>
      <Dinner dishName="Nihaari"  sweetDish="kheer"/>
      <hr/>
      <Dinner dishName="Biryani"  sweetDish="Jaleebi"/>
      <hr/> 
      <Dinner dishName="Karahi"  sweetDish="Gajar ka halwa"/>
      <hr/>
      <Burhan hght="5.11" clor="white"/>
      <br/>
      <Burhan clor="brown" hght="5.4"/>
    </div>   
  );
}

export default App;
