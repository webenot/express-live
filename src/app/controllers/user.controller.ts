import { UserModel, IUser } from '../models/user.model';

interface ICreateUserInput {
  email: IUser['email'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
}

export const UserController = {
  createUser(userData: ICreateUserInput): Promise<IUser> {
    return UserModel.create(userData)
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  },
};
