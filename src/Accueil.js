import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accueil = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://pokedex-api.3rgo.tech/pokemons';

    axios.get(apiUrl)
      .then(response => {
        setPokemons(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des Pokémon', error);
      });
  }, []);  

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accueil;
