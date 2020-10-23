import React from 'react';

const BestPokemon = (props) => {
    // const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  
    return <div>
            <p>My favourite pokemon is Charizard</p>
            <ul>
              {props.abilities.map((a, i) => {
                return <li key={i}>{a}</li>;
              })}
            </ul>
          </div>
}

export default BestPokemon;