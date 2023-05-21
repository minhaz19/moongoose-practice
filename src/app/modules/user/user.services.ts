import { UserInterface } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (
  payload: UserInterface
): Promise<UserInterface> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUserFromDB = async (): Promise<UserInterface[]> => {
  const data = User.find()
  return data;
};

export const getUserByIdFromDB =async (params: string): Promise<UserInterface | null> => {
  const user = await User.findOne({id: params}, {name: 1, contactNo: 1, role: true})
  return user;
}