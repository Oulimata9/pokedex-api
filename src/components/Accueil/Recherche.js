// Recherche.js
import React from 'react';

const Recherche = ({ onSearchChange }) => {
  return (
    <div>
      <label htmlFor="search">Rechercher par nom:</label>
      <input
        type="text"
        id="search"
        placeholder="Entrez le nom du Pokémon"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Recherche;
