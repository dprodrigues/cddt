import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import { signOut } from 'firebase/auth'
import { Popover, Transition } from '@headlessui/react'
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { useUser } from '@/hooks/user'
import Link from 'next/link'

export const User = () => {
  const router = useRouter()
  const { auth } = useFirebase()
  const { user } = useUser()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => router.push('/'))
      .catch((error) => console.error(error))
  }

  return (
    <Popover className="relative flex items-center">
      <Popover.Button className="rounded-full outline-none">
        <span className="sr-only">Open user</span>

        {user?.photoURL ? (
          <Image
            src={user.photoURL}
            alt="User image"
            height={40}
            width={40}
            className="rounded-full border-2 border-rose-900"
          />
        ) : (
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-rose-700 text-white uppercase font-bold border-2 border-rose-900">
            {user?.displayName ? user.displayName[0] : user?.email?.[0]}
          </div>
        )}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-11 -right-3 2xl:-right-[4.5rem] p-2 transition transform origin-top-right w-48"
        >
          <div className="rounded-lg relative shadow-md shadow-gray-200 border-gray-100 border bg-white divide-y divide-gray-100">
            <Link href="/profile">
              <a className="flex items-center w-full p-4 pb-2 focus:outline-none text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100">
                <FaUser className="text-gray-700 mr-1" />
                Profile
              </a>
            </Link>

            <Link href="/settings">
              <a className="flex items-center w-full px-4 py-2 focus:outline-none text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100">
                <FaCog className="text-gray-700 mr-1" />
                Settings
              </a>
            </Link>

            <button
              className="flex items-center w-full text-left p-4 pt-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="text-gray-700 mr-1" />
              Sign out
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
