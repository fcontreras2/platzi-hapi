import UserController from '../controllers/UserController';

export default [
  {
    method: ["GET"],
    path: '/users',
    handler: UserController.getAll,
  }
]