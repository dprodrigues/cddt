import styled from 'styled-components'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { SocialButton } from './social-button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export default function SocialButtons({ providers, onLogin }) {
  return (
    <Container>
      <SocialButton
        label="Google"
        icon={<FaGoogle />}
        provider={providers.google}
        onLogin={onLogin}
      />

      <SocialButton
        label="Github"
        icon={<FaGithub />}
        provider={providers.github}
        onLogin={onLogin}
      />
    </Container>
  )
}
