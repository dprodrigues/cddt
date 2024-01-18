'use client'

import { useRouter } from 'next/navigation'
import { FaUser, FaCog, FaSignOutAlt, FaHome } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { useFirebaseAuth } from '@/auth/firebase'
// import { List, Link, Button } from './styles'

const items = [
  {
    label: 'Home',
    href: '/app',
    icon: FaHome,
  },
  {
    label: 'Profile',
    href: '/app/profile',
    icon: FaUser,
  },
  {
    label: 'Settings',
    href: '/app/settings',
    icon: FaCog,
  },
]

export const Navigation = () => {
  const { getFirebaseAuth } = useFirebaseAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut(getFirebaseAuth())
    await fetch('/api/logout', { method: 'GET' })

    router.push('/auth/login')
  }

  return (
    <>
      {/* {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link href={href}>
            <Icon />

            <span>{label}</span>
          </Link>
        </li>
      ))} */}

      <li>
        <button onClick={handleSignOut}>
          <FaSignOutAlt />

          <span>Sign out</span>
        </button>
      </li>
    </>
  )
}
