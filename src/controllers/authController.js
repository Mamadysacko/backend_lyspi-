// controllers/authController.js
const { register, verifyEmail } = require('../services/authService');
const { findByEmail, checkPassword } = require('../models/authModel');
const jwt = require('jsonwebtoken');

const signToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).json({
      message: 'Inscription OK. Vérifie ton email !',
      userId: user.userId
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.verify = async (req, res) => {
  try {
    const user = await verifyEmail(req.params.token);
    const token = signToken(user.id, user.email);
    res.json({ message: 'Email vérifié ! Tu peux te connecter.', token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;
  if (!email || !mot_de_passe) {
    return res.status(400).json({ message: 'Email et mot de passe requis' });
  }

  try {
    const user = await findByEmail(email);
    if (!user || !(await checkPassword(mot_de_passe, user.mot_de_passe))) {
      return res.status(401).json({ message: 'Mauvais identifiants' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: 'Vérifie ton email d\'abord' });
    }

    const token = signToken(user.id, user.email);
    res.json({ message: 'Connexion OK', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};