import { NextResponse } from 'next/server'
import { compare } from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { sign } from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    )

    return NextResponse.json({ token, user: { id: user.id, email: user.email, role: user.role } })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred during sign-in.' }, { status: 500 })
  }
}

