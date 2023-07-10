import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name: string
    username: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
