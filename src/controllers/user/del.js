/**
 * DeleteUser controller
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  let connection;
  const { id } = req.body;
  try {
    connection = await pool.getConnection();
    const data = connection.query("CALL deleteUser(?);", [id]);
    res.status(200).json({ success: true, data, message: "Utilisateur effacé" })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  } finally {
    if (connection) connection.end();
  }
}