// app.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// 🔧 Middleware globaux
app.use(express.json());
app.use(cors());

// 🧾 Logger pour les requêtes HTTP (utile en dev)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 🛣️ Variables de configuration
const API_BASE = process.env.API_BASE || '/api';

// 🧭 Import des routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// 🧩 Utilisation des routes
app.use(`${API_BASE}/auth`, authRoutes);
app.use(`${API_BASE}/users`, userRoutes);

// 🛑 Middleware global de gestion des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur détectée :', err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Erreur interne du serveur',
  });
});

// Exporte l'application Express pour que le serveur puisse démarrer ailleurs
module.exports = app;
