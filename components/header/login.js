'use client'
import { User } from './user'
import { LoggedOut } from './logged-out'

export const Login = ({ user }) => (user?.email ? <User /> : <LoggedOut />)
