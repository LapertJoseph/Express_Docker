/**
 * Login User controller
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  let connection;
  const { email, password } = req.body;
  try {
    connection = await pool.getConnection();
    const data = await connection.query("CALL login(?, ?);", [email, password]);
    req.session.uid = data?.id;
    req.session.email = data?.email;
    res.status(200).json({ success: true, data: data[0], message: `Utilisateur ${email} trouvé.` });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  } finally {
    if (connection) connection.end();
  }
}