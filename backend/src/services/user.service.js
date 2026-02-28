const userModel = require("../models/user.model");

const getAllUsers = async () => {
  // Add any business logic here before interacting with the database
  return await userModel.findAll();
};

const createUser = async (userData) => {
  if (!userData.email || !userData.name) {
    const error = new Error("Name and email are required");
    error.statusCode = 400;
    throw error;
  }

  return await userModel.create(userData);
};

module.exports = {
  getAllUsers,
  createUser,
};
