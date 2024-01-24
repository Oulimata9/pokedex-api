// PokedexService.js
import axios from 'axios';

const BASE_URL = 'https://pokedex-api.3rgo.tech/';

const PokedexService = {
  getAllPokemon: () => axios.get(`${BASE_URL}pokemon`),
  getPokemonById: (id) => axios.get(`${BASE_URL}pokemon/${id}`),
  // Ajoutez d'autres fonctions en fonction de vos besoins
};

export default PokedexService;
