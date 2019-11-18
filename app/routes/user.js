import UserController from '../controllers/UserController';

export default [
  {
    method: ["GET","POST","DELETE","PATCH"],
    path: '/users',
    handler: UserController.get,
  }
]