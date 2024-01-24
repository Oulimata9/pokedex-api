// ListePokemon.js
import React from 'react';

const ListePokemon = ({ pokemons }) => {
  return (
    <div>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.number} - {pokemon.name} - {pokemon.types.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListePokemon;
