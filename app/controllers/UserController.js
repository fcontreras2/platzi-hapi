
import User from '../model/User';

/**
 * @api {get} /users/
 * @apiName GET - Todos
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
exports.getAll = (req,h) => {
  return 'hola'
}

// /**
//  * @api {get} /user/:id Request User information
//  * @apiName GetUser
//  * @apiGroup User
//  *
//  * @apiParam {Number} id Users unique ID.
//  *
//  * @apiSuccess {String} firstname Firstname of the User.
//  * @apiSuccess {String} lastname  Lastname of the User.
//  */
// exports.getByName = async (req,h) => {
//   const user = await User.find(req.params)
//   return user;
// }