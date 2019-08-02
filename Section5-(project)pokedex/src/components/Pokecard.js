import React from 'react';
import './Pokecard.css';

const IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const getPokeId = id => {
  return `00${id}`.slice(-3);
};

class Pokecard extends React.Component {
  static defaultProps = {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    base_experience: 62
  };

  render() {
    console.log('function render()- class Pokecard');
    // get data from parent component
    const { id, name, type, base_experience } = this.props,
      exp = base_experience,
      img = `${IMG_API}${getPokeId(id)}.png`;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img src={img} alt={name} />
        </div>
        <div className='Pokecard-data'>Type: {type}</div>
        <div className='Pokecard-data'>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
