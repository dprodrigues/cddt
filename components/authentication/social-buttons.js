import { Flex } from '@radix-ui/themes'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { SocialButton } from './social-button'

export default function SocialButtons({ providers, onLogin }) {
  return (
    <Flex direction="column" gap="4" width="100%">
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
    </Flex>
  )
}
