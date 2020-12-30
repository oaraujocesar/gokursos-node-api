import User from '../models/User';

class UserController {
  async store(request, response) {
    const { name, email, password, bio, avatar } = request.body;
    
    const isUserRegistered = await User.findOne({ email });
    
    if(isUserRegistered) {
      return response.status(409).json({ error: "User is already registered" });
    } 
    
    const user = await User.create({
      name,
      email,
      password,
      bio,
      avatar
    });
    
    delete user.password
    
    return response.status(201).json(user);
  }

  async update(request, response) {

    console.log(request.userId)
    return response.json({ ok: true });
  }
}

export default new UserController();