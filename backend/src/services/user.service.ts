import * as userModel from "../models/user.model";

export const getAllUsers = async () => {
  // Add any business logic here before interacting with the database
  return await userModel.findAll();
};

export const createUser = async (userData: any) => {
  if (!userData.email || !userData.name) {
    const error: any = new Error("Name and email are required");
    error.statusCode = 400;
    throw error;
  }

  return await userModel.create(userData);
};
