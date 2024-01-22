'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@radix-ui/themes'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.includes('auth')) {
    return null
  }

  return (
    <Container>
      Made with ♥ by{' '}
      <NextLink
        href="https://github.com/dprodrigues"
        target="_blank"
        rel="noopener"
      >
        Daniel Rodrigues
      </NextLink>
    </Container>
  )
}
