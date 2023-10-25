'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Login } from './login'
import { useAuth } from '@/auth/context'

const UserSkeleton = () => (
  <div role="status" className="flex items-center max-w-sm animate-pulse">
    <div className="h-10 bg-gray-200 rounded-md w-24 mr-2" />
    <div className="h-10 bg-gray-200 rounded-md w-24" />
    <span className="sr-only">Loading...</span>
  </div>
)

export default function Normal() {
  const { user, loading } = useAuth()

  return (
    <header className="border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">CDDT</span>

            <Image
              className="h-8 w-auto sm:h-10"
              src="/images/logos/logo.png"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </div>

        {loading ? <UserSkeleton /> : <Login user={user} />}
      </div>
    </header>
  )
}
