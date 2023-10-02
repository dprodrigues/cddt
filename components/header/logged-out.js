'use client'
import Link from 'next/link'

export const LoggedOut = () => (
  <div className="flex items-center justify-end">
    <Link
      href="/auth/sign-in"
      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    >
      Sign in
    </Link>

    <Link
      href="/auth/sign-up"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-800 hover:bg-rose-700 active:bg-rose-900"
    >
      Sign up
    </Link>
  </div>
)
