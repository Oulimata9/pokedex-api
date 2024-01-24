// Filtres.js
import React from 'react';

const Filtres = ({ generations, types, onGenerationChange, onTypeChange }) => {
  return (
    <div>
      <label htmlFor="generation">Filtrer par génération:</label>
      <select id="generation" onChange={onGenerationChange}>
        <option value="">Toutes les générations</option>
        {generations.map(generation => (
          <option key={generation} value={generation}>
            {generation}
          </option>
        ))}
      </select>

      <label htmlFor="type">Filtrer par type:</label>
      <select id="type" onChange={onTypeChange}>
        <option value="">Tous les types</option>
        {types.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtres;
