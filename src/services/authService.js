// services/authService.js
const { db } = require('../config/database');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendVerificationEmail } = require('./emailService');

const register = async (data) => {
  const { id_user, nom, prenom, email, mot_de_passe, id_type_compte, id_liste_univ } = data;

  // Vérifier champs
  if (!id_user || !nom || !prenom || !email || !mot_de_passe || !id_type_compte || !id_liste_univ) {
    throw new Error('Tous les champs sont obligatoires');
  }

  // Vérifier doublon
  const [exist] = await db.execute(
    'SELECT id FROM users WHERE email = ? OR id_user = ?',
    [email, id_user]
  );
  if (exist.length > 0) throw new Error('Email ou ID déjà utilisé');

  // Hachage
  const hashed = await bcrypt.hash(mot_de_passe, 10);
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 3600000); // 1h

  // Insertion
  const [result] = await db.execute(
    `INSERT INTO users 
     (id_user, nom, prenom, email, mot_de_passe, id_type_compte, id_liste_univ, 
      verificationToken, verificationTokenExpiresAt, isVerified)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
    [id_user, nom, prenom, email, hashed, id_type_compte, id_liste_univ, token, expires]
  );

  // Envoi email
  await sendVerificationEmail(email, token);

  return { userId: result.insertId, email };
};

const verifyEmail = async (token) => {
  const [rows] = await db.execute(
    'SELECT id, email, verificationTokenExpiresAt FROM users WHERE verificationToken = ? AND isVerified = 0',
    [token]
  );

  const user = rows[0];
  if (!user) throw new Error('Lien invalide ou déjà utilisé');
  if (new Date(user.verificationTokenExpiresAt) < new Date()) throw new Error('Lien expiré');

  await db.execute(
    'UPDATE users SET isVerified = 1, verificationToken = NULL, verificationTokenExpiresAt = NULL WHERE id = ?',
    [user.id]
  );

  return { id: user.id, email: user.email };
};

module.exports = { register, verifyEmail };