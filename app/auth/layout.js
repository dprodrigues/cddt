'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/header'
// import { Container, Modal, Title } from '@/styles/auth'

export default function LayoutAuth({ children }) {
  const pathname = usePathname()
  const title = pathname.includes('register')
    ? 'Register on cddt. :D'
    : 'Login with social media'

  return (
    <>
      <Header />

      <div>
        <div>
          <div>{title}</div>

          {children}
        </div>
      </div>
    </>
  )
}
