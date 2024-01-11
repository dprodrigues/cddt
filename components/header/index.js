'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { Container, Wrapper, Logo, Login, Register } from './styles'

const Header = () => {
  const pathname = usePathname()

  if (pathname?.includes('auth')) {
    return (
      <Container>
        <Wrapper>
          <NextLink href="/">
            <Logo src="/svgs/logo.svg" alt="logo" height={50} width={50} />
          </NextLink>
        </Wrapper>
      </Container>
    )
  }

  return (
    <Container $hasBorder>
      <Wrapper>
        <NextLink href="/">
          <Logo src="/svgs/logo.svg" alt="logo" height={50} width={50} />
        </NextLink>

        <div className="flex items-center justify-end">
          <Login href="/auth/login">Login</Login>

          <Register href="/auth/register">Register</Register>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header
