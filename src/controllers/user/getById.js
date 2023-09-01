/**
 * getUserById controller
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  let connection;
  const { id } = req.params;
  try {
    connection = await pool.getConnection();
    const data = await connection.query("CALL getUserById(?);", [id]);
    res.status(200).json({ success: true, data: data[0] });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  } finally {
    connection ? connection.end : "Error de fermeture de connexion";
  }
}