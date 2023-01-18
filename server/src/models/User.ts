import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  { versionKey: false }
);

export default mongoose.model<IUserModel>('User', UserSchema);
