/**
 * Logout controllers
 */

const pool = require("../../config/database");

module.exports = async (req, res) => {
  console.log(req.session);
  if (req.session.id) {
    console.log("Session: 1", req.session);
    req.session.destroy();
    console.log("Session: 2", req.session);
    return res.status(200).send("Utilisateur déconnecter")
  }
  res.status(401).send("Ici");
}
