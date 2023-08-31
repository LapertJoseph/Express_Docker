/**
 * postUser controller
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  let connection;
  const { name, lastname, email, password, actif } = req.body;
  try {
    connection = await pool.getConnection();
    const data = await connection.query("CALL addUser(?, ?, ?, ?, ?);", [name, lastname, email, password, actif])
    res.status(200).json({ success: true, data, message: `user ${name} inscrit.` });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  } finally {
    if (connection) connection.end();
  }
}