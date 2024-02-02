'use client'

import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import '@/styles/home.css'

export default function Home() {
  const router = useRouter()

  function handleSignup() {
    router.push('/auth/signup')
  }

  function handleAbout() {
    router.push('/about')
  }

  return (
    <>
      <Header />

      <Container px={{ initial: 6, lg: 0 }}>
        <Flex
          pt="8"
          pb="9"
          gap="4"
          align="center"
          direction={{ initial: 'column', md: 'row' }}
        >
          <Flex direction="column" justify="center" height="100%">
            <Heading size={{ initial: 8, md: 9 }}>
              Organize your life, one note at a time.
            </Heading>

            <Text
              as="p"
              mt={{ initial: 2, md: 6 }}
              size={{ initial: 3, md: 4 }}
            >
              Empower your productivity: Your ultimate task manager and
              note-taking app for enhanced focus and organization.
            </Text>

            <Flex mt="5" gap="4">
              <Button size="3" onClick={handleSignup}>
                Get started for free
              </Button>

              <Button
                size="3"
                variant="outline"
                style={{ boxShadow: 'none' }}
                onClick={handleAbout}
              >
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </Flex>
          </Flex>

          <Image
            className="home-art"
            src="/svgs/home-art.svg"
            alt="Home art"
            height={512}
            width={512}
          />
        </Flex>
      </Container>

      <Footer />
    </>
  )
}
