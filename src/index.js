import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import MainApp from './App'; // Renommez l'importation pour éviter les conflits de noms
import reportWebVitals from './reportWebVitals';
import Accueil from './Accueil';
import FicheIndividuelle from './FicheIndividuelle';

const root = document.getElementById('root');
createRoot(root).render( // Utilise createRoot directement
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/fiche/:id" component={FicheIndividuelle} />
        {/* Ajoutez d'autres routes selon votre structure */}
      </Switch>
    </Router>
  </React.StrictMode>
);

// Utilisez un nom différent pour éviter les conflits de noms
reportWebVitals();

// Utilisez un nom différent pour éviter les conflits de noms
const MyMainApp = MainApp;

const appRoot = document.getElementById('app-root'); // Utilisez un ID différent pour éviter les conflits de noms
createRoot(appRoot).render(<MyMainApp />);
