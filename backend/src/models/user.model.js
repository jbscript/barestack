// Sample mock database using an array
const users = [{ id: 1, name: "John Doe", email: "john@example.com" }];

const findAll = async () => {
  // Simulate async DB query
  return Promise.resolve(users);
};

const create = async (user) => {
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  return Promise.resolve(newUser);
};

module.exports = {
  findAll,
  create,
};
