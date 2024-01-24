// FicheIndividuelle.js
import React, { useState } from 'react';

const FicheIndividuelle = ({ pokemon }) => {
  const [showShiny, setShowShiny] = useState(false);

  const toggleShiny = () => {
    setShowShiny(!showShiny);
  };

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Numéro: {pokemon.number}</p>
      <p>Génération: {pokemon.generation}</p>
      <p>Type(s): {pokemon.types.join(', ')}</p>
      <p>Taille: {pokemon.height}</p>
      <p>Poids: {pokemon.weight}</p>
      <p>Statistiques: {JSON.stringify(pokemon.stats)}</p>

      <div>
        <img
          src={showShiny ? pokemon.image_shiny : pokemon.image_regular}
          alt={pokemon.name}
        />
        <button onClick={toggleShiny}>
          {showShiny ? 'Afficher Regular' : 'Afficher Shiny'}
        </button>
      </div>

      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <div>
          <h3>Arbre des évolutions</h3>
          <ul>
            {pokemon.evolutions.map(evolution => (
              <li key={evolution.id}>
                {evolution.name} - {evolution.trigger}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FicheIndividuelle;
