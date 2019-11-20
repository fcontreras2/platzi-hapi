const Joi = require('@hapi/joi')
const Boom = require('@hapi/boom');
import UserController from '../controllers/UserController';


const handleError = function (request, h, err) {

  if (err.isJoi && Array.isArray(err.details) && err.details.length > 0) {
      const invalidItem = err.details[0];
      return h.response(`Data Validation Error. Schema violation. <${invalidItem.path}> \nDetails: ${JSON.stringify(err.details)}`)
          .code(400)
          .takeover();
  }

  return h.response(err)
      .takeover()
};

export default [
  {
    method: ["GET"],
    path: '/users',
    handler: UserController.getAll,
  },
  {
    method: ["POST"],
    path: '/users',
    handler: UserController.save,
    options: {
      auth: false,
      validate: {
        options: {
          abortEarly: false
        },
        payload:
          Joi.object({
            name: Joi.string()
              .alphanum()
              .required(),
            lastName: Joi.string()
              .alphanum()
              .required()
          }),
        failAction: handleError
      }
    }
  }
]