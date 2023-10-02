'use client'
import { usePathname } from 'next/navigation'
import Normal from './normal'
import Basic from './basic'

export default function Header() {
  const pathname = usePathname()

  if (pathname?.includes('auth')) {
    return <Basic />
  }

  return <Normal />
}
