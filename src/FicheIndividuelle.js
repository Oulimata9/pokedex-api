import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FichePokemon = ({ numeroPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // Faire la requête vers l'API pour obtenir les détails du Pokémon en fonction du numéro
    axios.get(`https://pokedex-api.3rgo.tech/pokemons/${numeroPokemon}`)
      .then(response => setPokemonDetails(response.data))
      .catch(error => console.error('Erreur lors de la récupération des détails du Pokémon', error));
  }, [numeroPokemon]);

  // ... Reste de ton composant pour afficher les détails du Pokémon
};

export default FichePokemon; // Correction ici

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

export { FicheIndividuelle }; // Correction ici
