'use client'

import { usePathname } from 'next/navigation'
import { Box, Flex, Heading } from '@radix-ui/themes'
import Header from '@/components/header'
import '@/styles/auth.css'

export default function LayoutAuth({ children }) {
  const pathname = usePathname()
  const title = pathname.includes('signup')
    ? 'Create your account :D'
    : 'Log in with social media'

  return (
    <>
      <Header />

      <Box className="auth__container">
        <Flex className="auth__modal" direction="column" align="center" p="9">
          <Heading as="h2" mb="8">
            {title}
          </Heading>

          {children}
        </Flex>
      </Box>
    </>
  )
}
