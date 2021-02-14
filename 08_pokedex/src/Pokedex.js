import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemon, player, handExp, isWinner}) => {
  return (
    <div className={ isWinner ? "Pokedex winner" : "Pokedex" }>
      <h4>{player} EXP Value: {handExp} <br></br> {isWinner ? 'This Hand Wins!' : ''}</h4>
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          pokemonName={p.name}
          pokemonType={p.type}
          pokemonExp={p.base_experience}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
        />
      ))}
    </div>
  );
};

export default Pokedex;
