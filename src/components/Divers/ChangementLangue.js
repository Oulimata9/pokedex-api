// ChangementLangue.js
import React, { useContext } from 'react';

const ChangementLangue = ({ onChangeLangue }) => {
  return (
    <div>
      <label htmlFor="langue">Changer de langue:</label>
      <select id="langue" onChange={onChangeLangue}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default ChangementLangue;
