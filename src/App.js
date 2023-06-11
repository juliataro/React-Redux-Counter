import React from 'react';
import './App.css';
import {CounterComponent} from './Components/Counter/CounterComponent'
import {PokemonComponent} from './Components/Pokemon/PokemonComponent'



function App() {

  return (
    <div className="App">
     
      <h1>check</h1>
      <CounterComponent />
      <br />
      <br />
      <PokemonComponent />
     
   
    </div>
  );
}

export default App;
