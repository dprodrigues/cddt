'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const pathname = usePathname()

  if (pathname?.includes('auth')) {
    return (
      <header className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <Link href="/">
            <span className="sr-only">CDDT</span>

            <Image
              className="w-32"
              src="/svgs/logo.svg"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">CDDT</span>

            <Image
              className="w-32"
              src="/svgs/logo.svg"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </div>

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
      </div>
    </header>
  )
}

export default Header
