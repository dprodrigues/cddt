'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  Container,
  Title,
  Description,
  Image,
  LinksContainer,
  GetStarted,
  LearnMore,
} from '@/styles/home'

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <div>
          <Title>Organize Your Life, One Note at a Time.</Title>

          <Description>
            Empower Your Productivity: Your ultimate task manager and
            note-taking app for enhanced focus and organization.
          </Description>

          <LinksContainer>
            <GetStarted href="/auth/register">Get started for free</GetStarted>

            <LearnMore
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </LearnMore>
          </LinksContainer>
        </div>

        <Image
          className="w-auto max-w-md lg:max-w-lg lg:-mr-8 z-0"
          src="/svgs/home-art.svg"
          alt="logo"
          height={500}
          width={500}
        />
      </Container>

      <Footer />
    </>
  )
}
