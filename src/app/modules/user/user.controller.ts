import { Request, Response } from "express";
import {
  createUserDB,
  getUserByIdFromDB,
  getUserFromDB,
} from "./user.services";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUserFromDB();
  res.status(200).json({
    status: "Success",
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: "Success",
    data: user,
  });
};
