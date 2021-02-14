
import React from "react";
import './Pokecard.css'

const Pokecard = ({pokemonName, pokemonType, pokemonExp, img}) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-title">{pokemonName}</h4>
      <img className="Pokecard-img" src={img} alt={`Picture of ${pokemonName}`}></img>
      <p>Type: {pokemonType}</p>
      <p>EXP: {pokemonExp}</p>
    </div>
  )
}

export default Pokecard;
