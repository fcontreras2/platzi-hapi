import User from '../models/User';
const Boom = require('@hapi/boom')

/**
 * @api {get} /users/ GET - Todos 
 * @apiName Obtener todos los usuarios
 * @apiVersion 0.1.0
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
exports.getAll = async (req, h) => {
  return await User.find();
}

/**
 * @api {post} /users/ POST - Usuario
 * @apiVersion 0.1.0
 * @apiName Obtener información del usuario
 * @apiGroup User
 * 
 * @apiParam {String} name nombre del usuario
 * @apiParam {String} lastName apellido del usuario
 * 
 * @apiSuccess {String} _id identificador del usuario.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
exports.save = async (req, h) => {
  const user = new User(req.payload);

  await user.save(function (err) {
    if (err) return "error";
    // saved!
  });

  return user;
}