// src/config/database.js
const mysql = require('mysql2');
require('dotenv').config();

// Création d'un pool de connexions
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,  // nombre max de connexions simultanées
  queueLimit: 0
});

// Version Promesse (permet async/await)
const dbPromise = db.promise();

// Test de connexion
const connectDB = async () => {
  try {
    await dbPromise.query('SELECT 1'); // requête simple pour tester la connexion
    console.log(' Connexion MySQL établie avec Pool');
  } catch (err) {
    console.error('Erreur de connexion à MySQL:', err.message);
  }
};

// Export
module.exports = { connectDB, db: dbPromise };
