// models/userModel.js
const { db } = require('../config/database');

const getAll = async () => {
  const [rows] = await db.execute(
    'SELECT id, id_user, nom, prenom, email, id_type_compte, id_liste_univ FROM users'
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.execute(
    'SELECT id, id_user, nom, prenom, email, id_type_compte, id_liste_univ FROM users WHERE id = ?',
    [id]
  );
  return rows[0] || null;
};

module.exports = { getAll, getById };