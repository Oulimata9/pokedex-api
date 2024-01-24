// ListePokemon.js
import React from 'react';
import { Link } from 'react-router-dom';

function ListePokemon() {
  // Récupérez la liste des Pokémon et générez des liens
  const pokemons = [...]; // Votre liste de Pokémon

  return (
    <div>
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <Link to={`/fiche/${pokemon.id}`}>{pokemon.nom}</Link>
        </div>
      ))}
    </div>
  );
}

export {ListePokemon};

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
