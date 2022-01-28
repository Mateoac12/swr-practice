import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function list(req, res) {
  const { data } = req.body

  const createdPost = await prisma.post.create({
    data,
  })
  console.log({ createdPost, data })
  res.status(200).json(createdPost)
}
