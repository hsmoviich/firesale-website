import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'CONSULTANT', // Default role
      },
    })

    return NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while registering the user.' }, { status: 500 })
  }
}

