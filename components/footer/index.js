'use client'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.includes('auth')) {
    return null
  }

  return (
    <footer className="text-center py-4">
      Made with ♥ by Daniel Rodrigues
    </footer>
  )
}
