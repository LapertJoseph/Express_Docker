/**
 * putUser controller
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  let connection;
  const { id, name, lastname, email, password, actif } = req.body;
  try {
    connection = await pool.getConnection();
    const data = await connection.query("CALL updateUser(?, ?, ?, ?, ?, ?);",
      [id, name, lastname, email, password, actif]);
    res.status(200).json({success: true, data, message: `Utilisateur ${lastname} mis à jour`});
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  } finally {
    if (connection) connection.end();
  }
}
