import bcrypt from 'bcrypt';

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

    const { name, email, oldPassword, password, bio, avatar } = request.body;

    const user = await User.findOne({ _id: request.userId });

    if(!user) {
      return response.status(404).json({ error: 'User not found.' })
    }

    if(!(await bcrypt.compare(oldPassword, user.password))) {
      return response.status(400).json({ error: 'Old password does not match.' })
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.bio = bio;
    user.avatar = avatar;

    user.save();

    const { id } = user

    return response.status(201).json({ id, name, email, bio, avatar });
  }

  async delete(request, response) {
    await User.deleteOne({ _id: request.userId });

    return response.status(200).json({ error: 'User deleted successfully.' })
  }
}

export default new UserController();