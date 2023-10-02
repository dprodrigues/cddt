'use client'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.includes('auth')) {
    return null
  }

  return <footer>Made with ♥ by Daniel Rodrigues</footer>
}
