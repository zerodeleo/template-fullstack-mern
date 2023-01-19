import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const isTrueIfUsernameExists = async (username: string) => {
  const user = await User.find({ username });
  return user.length === 0;
};

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  User.find({ username }).then((user) => {
    if (user.length !== 0 && user[0].password === password) {
      return res.status(200).json({ user });
    } else {
      return res.status(403).json({ message: 'Wrong credentials' });
    }
  });
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const _id = new mongoose.Types.ObjectId();

  if (await isTrueIfUsernameExists(username)) {
    const user = new User({ _id, username, password });
    return user
      .save()
      .then((user) => res.cookie('_id', _id).status(201).json({ user }))
      .catch((err) => res.status(500).json({ err }));
  } else {
    return res.status(409).json({ message: 'Username already exists' });
  }
};

const readUser = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.params;

  User.find({ username }).then((user) => {
    if (user.length !== 0) {
      return res.status(200).json({ user });
    } else {
      return res.status(403).json({ message: 'User not found' });
    }
  });
};

const readAllUsers = (_: Request, res: Response, next: NextFunction) => {
  return User.find()
    .then((users) => res.json({ users }))
    .catch((err) => res.status(500).json({ err }));
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.params;
  const { username } = req.body;

  if (!(await isTrueIfUsernameExists(username))) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  return User.findById(_id).then((user) => {
    if (user) {
      user.set(req.body);

      return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((err) => res.status(500).json({ err }));
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.params;

  return User.findByIdAndDelete(_id)
    .then((user) => (user ? res.status(201).json({ message: 'User deleted' }) : res.status(404).json({ message: 'User not found' })))
    .catch((err) => res.status(500).json({ err }));
};

export default { createUser, readUser, readAllUsers, updateUser, deleteUser, authenticateUser };
