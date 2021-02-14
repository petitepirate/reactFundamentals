import React from 'react';
import Pokedex from './Pokedex'
import pokemonData from './pokemonData';

const Pokegame = () => {
  const gameDeal = dealer();
  const hand1Exp = totalExp(gameDeal.hand1)
  const hand2Exp = totalExp(gameDeal.hand2)
  
  return (
    <>
      <Pokedex pokemon={gameDeal.hand1} player='Player 1' handExp={hand1Exp} isWinner={hand1Exp > hand2Exp ? true : false} />
      <Pokedex pokemon={gameDeal.hand2} player='Player 2' handExp={hand2Exp} isWinner={hand2Exp > hand1Exp ? true : false} />
    </>
  )
}


function randomNum(cardsLeft) {
  return Math.floor(Math.random() * cardsLeft)
}

function dealer() {
  let hand1 = [];
  let hand2 = [];
  const deckSize = pokemonData.length;

  for (let i = deckSize; i > 0; i--) {
    let idx = randomNum(i);
    let card = pokemonData[idx];
    hand1.length < deckSize / 2 ? hand1.push(card) : hand2.push(card);
    pokemonData.splice(idx, 1);
  }
  return {hand1, hand2}
}

function totalExp(hand) {
  return hand.reduce((acc, p) => {
    return acc + p.base_experience
  }, 0)
}

export default Pokegame;
