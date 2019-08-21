import React from 'react';
// import Pokecard from './components/Pokecard';
// import Pokedex from './components/Pokedex';
import PokeGame from './components/PokeGame'
import './App.css';

class App extends React.Component {
  render() {
    console.log('function render()- class App');
    return (
      <div>
        {/* <Pokecard {...pokeOne}/> */}
        {/* <Pokedex /> */}
        <PokeGame />
      </div>
    );
  }
}

export default App;
