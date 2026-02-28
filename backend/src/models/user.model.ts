// Sample mock database using an array
export interface User {
  id: number;
  name?: string;
  email?: string;
  [key: string]: any;
}

const users: User[] = [{ id: 1, name: "John Doe", email: "john@example.com" }];

export const findAll = async (): Promise<User[]> => {
  // Simulate async DB query
  return Promise.resolve(users);
};

export const create = async (user: any): Promise<User> => {
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  return Promise.resolve(newUser);
};
