import { PrismaClient } from "@prisma/client";

declare global{
  var prisma: PrismaClient | undefined
}
// We have defined the client defining logic/ connecting to prisma client which we get after writing npx prisma generate, bcz hot module replacement happens in nextjs whenever u change ur code, bcz of that after every code change a new connection request goes to our database and the database can reach its limit. that is why we need a logic to define a prismaclient a single time whenever we are in development env(local codebase and cloud database), We don't need the logic when we are in production(bcz connection request to db are needed their) or when in local codebase and db


const prisma = globalThis.prisma ?? new PrismaClient() // if globalThis.prisma doesn't exist, this code line makes a new prismaclient()
// when the code execution reaches here the second time, the globalThis.prisma = PrismaClient(), hence it don't create a new connection request to the db, and this propogates further whenver hot module replacement happens in nextjs, bcz nextjs will just call the value inside prisma on every hmr, hence every time it wants the prisma value, only the initial prismaclient we feeded it, get sent to the prisma variable

if(process.env.NODE_ENV!=="production") globalThis.prisma = prisma // we assign new prismaclient to globalthis.prisma

export default prisma