import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function list(_, res) {
  const dataPosts = await prisma.post.findMany({})

  res.status(200).json(dataPosts)
}
