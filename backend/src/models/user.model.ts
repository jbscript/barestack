import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as dotenv from "dotenv";
dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });

export interface User {
  id: number;
  name?: string | null;
  email: string;
  [key: string]: any;
}

export const findAll = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const create = async (user: any): Promise<User> => {
  return await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
    },
  });
};
