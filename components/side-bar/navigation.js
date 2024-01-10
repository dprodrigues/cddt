'use client'

import Link from 'next/link'
import { FaUser, FaCog, FaSignOutAlt, FaHome } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { useFirebaseAuth } from '@/auth/firebase'
import { className } from './style'

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

  const handleSignOut = async () => {
    await signOut(getFirebaseAuth())
    await fetch('/api/logout', { method: 'GET' })

    router.push('/auth/login')
  }

  return (
    <ul className="font-medium text-sm">
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link href={href} className={className.item}>
            <Icon className={className.icon} />

            <span className="ms-3">{label}</span>
          </Link>
        </li>
      ))}

      <li>
        <button className={className.item} onClick={handleSignOut}>
          <FaSignOutAlt className={className.icon} />

          <span className="ms-3">Sign out</span>
        </button>
      </li>
    </ul>
  )
}
