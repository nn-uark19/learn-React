import React from 'react';
import PokeDex from './Pokedex';

class PokeGame extends React.Component {
  static defaultProps = {
    pokeAll: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };

  render() {
    console.log('function render()- class PokeGame');

    // build 2 hands
    var h1 = [];
    var h2 = [];
    for (var i = 0; i < 4; i++) {
      var rand = Math.floor(Math.random() * this.props.pokeAll.length);
      h1.push(this.props.pokeAll[rand]);
      rand = Math.floor(Math.random() * this.props.pokeAll.length);
      h2.push(this.props.pokeAll[rand]);
    }

    // calculate score for 2 hands and decide winner
    var exp1 = h1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    var exp2 = h2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <PokeDex pokeMulti={h1} isWinner={exp1 > exp2} score={exp1}/>
        <PokeDex pokeMulti={h2} isWinner={exp2 > exp1} score={exp2}/>
      </div>
    );
  }
}

export default PokeGame;
