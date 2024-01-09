'use client'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.includes('auth')) {
    return null
  }

  return (
    <footer className="text-center py-4">
      Made with ♥ by{' '}
      <a href="https://github.com/dprodrigues" target="_blank" rel="noopener">
        Daniel Rodrigues
      </a>
    </footer>
  )
}
