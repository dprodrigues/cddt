'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/header'
import { Container, Modal, Title } from '@/styles/deprecated/auth'

export default function LayoutAuth({ children }) {
  const pathname = usePathname()
  const title = pathname.includes('signup')
    ? 'Sign up on cddt. :D'
    : 'Log in with social media'

  return (
    <>
      <Header />

      <Container>
        <Modal>
          <Title>{title}</Title>

          {children}
        </Modal>
      </Container>
    </>
  )
}
