// models/authModel.js
const { db } = require('../config/database');
const bcrypt = require('bcrypt');

const findByEmail = async (email) => {
  const [rows] = await db.execute(
    'SELECT id, email, mot_de_passe, isVerified FROM users WHERE email = ?',
    [email]
  );
  return rows[0] || null;
};

const checkPassword = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};

module.exports = { findByEmail, checkPassword };