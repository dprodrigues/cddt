import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { useFirebaseAuth } from '@/auth/firebase'
import Link from 'next/link'

import { useAuth } from '@/auth/context'

export const User = () => {
  const router = useRouter()
  const { getFirebaseAuth } = useFirebaseAuth()
  const { user } = useAuth()

  async function handleLogout() {
    const auth = getFirebaseAuth()
    await signOut(auth)
    await fetch('/api/logout', {
      method: 'GET',
    })
    router.push('/auth/login')
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
            className="rounded-full border-2 border-violet-900"
          />
        ) : (
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-700 text-white uppercase font-bold border-2 border-violet-900">
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
          className="absolute top-11 -right-3 2xl:-right-[4.5rem] p-2 transition transform origin-top-right w-48 z-10"
        >
          <div className="rounded-lg relative shadow-md shadow-gray-200 border-gray-100 border bg-white divide-y divide-gray-100">
            <Popover.Button
              as={Link}
              href="/app/profile"
              className="flex items-center w-full p-4 pb-2 focus:outline-none text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100"
            >
              <FaUser className="text-gray-700 mr-1" />
              Profile
            </Popover.Button>

            <Popover.Button
              as={Link}
              href="/app/settings"
              className="flex items-center w-full px-4 py-2 focus:outline-none text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100"
            >
              <FaCog className="text-gray-700 mr-1" />
              Settings
            </Popover.Button>

            <Popover.Button
              className="flex items-center w-full text-left p-4 pt-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-100"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="text-gray-700 mr-1" />
              Sign out
            </Popover.Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )

  return <></>
}
