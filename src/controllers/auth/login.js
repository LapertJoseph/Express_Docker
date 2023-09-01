/**
 * Login User controller
 */
const jsonwebtoken = require("jsonwebtoken");
const pool = require("../../config/database");
const Config = require("../../config/env");

module.exports = async (req, res) => {
  let connection;
  const { email, password } = req.body;
  try {
    connection = await pool.getConnection();
    const data = await connection.query("CALL login(?, ?);", [email, password]);
    if (data.length === 0) {
      return res.status(401).json({ success: false, data: "compte inconnu" });
    }
    const token = jsonwebtoken.sign(
      {
        email,
        ...data[0]
      },
      Config.JWT_SECRET
    )
    res.set("x-access-token", token);
    req.session.uid = data?.id;
    req.session.email = data?.email;
    res.status(200).json({ success: true, user: data[0], message: `Utilisateur ${email} trouvé.` });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  } finally {
    if (connection) connection.end();
  }
}