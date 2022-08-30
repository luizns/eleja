import jwt from 'jsonwebtoken';

import ListUserService from '../../services/Users/ListUserService';

export default class SessionController { 
  constructor() {
    this.service = new ListUserService();
  }

  static create(request, response) {
    const { email, password } = request.body

    const user = this.service.FindUser(email, password)


  if(!user) {
      return response.status(401).json({error: 'Trainer not found'})
    }

    const {id, name} = trainer;

    return response.json({
      trainer: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, 'a07bda8fd5e39462b4c3d860a36f6b4d', {
        expiresIn: '5d'
      })
    })
  }
};

