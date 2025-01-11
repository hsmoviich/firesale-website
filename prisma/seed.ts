import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const adminPassword = await hash('admin1234', 10)
  
  await prisma.user.upsert({
    where: { email: 'admin1234' },
    update: {},
    create: {
      email: 'admin1234',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  console.log('Admin user seeded')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

