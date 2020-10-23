import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

function App() {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon />
    </div>
  );
}

export default App;
