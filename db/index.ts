import { PrismaClient } from "@/lib/generated/prisma";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | null;
}
let prisma: PrismaClient | null = null;

if(process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
}
    prisma = global.prisma;
}

export const  db = prisma;