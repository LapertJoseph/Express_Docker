/**
 * User controller routes index
 */

const get = require("./get");
const post = require("./post");
const del = require("./del");
const put = require("./put");
const getById = require("./getById") ;

module.export = {
  get,
  post,
  del,
  put,
  getById,
}