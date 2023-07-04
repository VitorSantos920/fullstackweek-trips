// Iniciar apenas um Client do Prisma por Sessão
/* 
  Sempre que acontece o HotReload, sem essa verificação, essa classe seria reinstanciada de novo e de novo, acarretando em múltiplas instâncias.
  E cada client é uma <conexão com o banco>, sobrecarregando-o.
*/
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma;
