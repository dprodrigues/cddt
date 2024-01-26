'use client'

import NextImage from 'next/image'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button, Container, Flex } from '@radix-ui/themes'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  function handleLogin() {
    router.push('/auth/login')
  }

  function handleSignup() {
    router.push('/auth/signup')
  }

  if (pathname?.includes('auth')) {
    return (
      <Container px={{ initial: 6, lg: 0 }} py="4">
        <Flex align="center" justify="center">
          <NextLink href="/">
            <NextImage
              src="/svgs/logo.svg"
              alt="logo"
              height={34}
              width={128}
            />
          </NextLink>
        </Flex>
      </Container>
    )
  }

  return (
    <Container px={{ initial: 6, lg: 0 }} py="4">
      <Flex justify="between">
        <NextLink href="/">
          <NextImage src="/svgs/logo.svg" alt="logo" height={34} width={128} />
        </NextLink>

        <Flex gap="4">
          <Button
            size="3"
            variant="outline"
            style={{ boxShadow: 'none' }}
            onClick={handleLogin}
          >
            Log in
          </Button>

          <Button size="3" onClick={handleSignup}>
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Header
