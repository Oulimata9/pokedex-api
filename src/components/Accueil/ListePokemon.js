// ListePokemon.js
import React from 'react';
import { Link } from 'react-router-dom';

// Utilisez cette version si vous souhaitez utiliser la version avec les liens
function ListePokemon({ pokemons }) {
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

export default ListePokemon;

// Utilisez cette version si vous souhaitez utiliser la version sans les liens
// (si vous souhaitez conserver les deux versions, assurez-vous de renommer la fonction)
// function ListePokemon({ pokemons }) {
//   return (
//     <div>
//       <ul>
//         {pokemons.map(pokemon => (
//           <li key={pokemon.id}>
//             {pokemon.number} - {pokemon.name} - {pokemon.types.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListePokemon;
