/**
 * User controller routes index
 */

const get = require("./get");
const post = require("./post");
const del = require("./del");
const put = require("./put");
const getById = require("./getById");
const login = require("../auth/login");
const logout = require("../auth/logout");

module.export = {
  get,
  post,
  del,
  put,
  getById,
  login,
  logout,
}