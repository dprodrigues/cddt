import Image from 'next/future/image'
import Link from 'next/link'
import { useUser } from '@/hooks/user'
import { Login } from './login'

const UserSkeleton = () => (
  <div role="status" className="flex items-center max-w-sm animate-pulse">
    <div className="h-10 bg-gray-200 rounded-md w-24 mr-2" />
    <div className="h-10 bg-gray-200 rounded-md w-24" />
    <span className="sr-only">Loading...</span>
  </div>
)

export const Header = () => {
  const { user, loading } = useUser()

  return (
    <header className="border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">CDDT</span>

              <Image
                className="h-8 w-auto sm:h-10"
                src="/images/logos/logo.png"
                alt="logo"
                height={50}
                width={50}
              />
            </a>
          </Link>
        </div>

        {loading ? <UserSkeleton /> : <Login user={user} />}
      </div>
    </header>
  )
}
