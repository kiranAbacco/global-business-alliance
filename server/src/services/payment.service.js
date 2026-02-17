import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const savePayment = async (data) => {
  return prisma.payment.create({
    data
  });
};
