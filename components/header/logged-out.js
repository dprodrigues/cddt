'use client'
import Link from 'next/link'

export const LoggedOut = () => (
  <div className="flex items-center justify-end">
    <Link
      href="/auth/login"
      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    >
      Login
    </Link>

    <Link
      href="/auth/register"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-violet-800 hover:bg-violet-700 active:bg-violet-900"
    >
      Register
    </Link>
  </div>
)
