import { PrismaClient } from '@prisma/client';

// Criamos uma única instância para ser usada em toda a app
export const prisma = new PrismaClient();