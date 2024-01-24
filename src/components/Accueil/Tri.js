// Tri.js
import React from 'react';

const Tri = ({ onSortChange }) => {
  return (
    <div>
      <label htmlFor="sort">Trier par:</label>
      <select id="sort" onChange={onSortChange}>
        <option value="number">Numéro</option>
        <option value="name">Alphabétique</option>
        <option value="weight">Poids</option>
        <option value="height">Taille</option>
      </select>
    </div>
  );
};

export default Tri;
