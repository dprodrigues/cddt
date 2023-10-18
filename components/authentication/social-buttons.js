import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { SocialButton } from './social-button'

export default function SocialButtons({ providers, onLogin }) {
  return (
    <div className="flex w-full flex-col space-y-4">
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
    </div>
  )
}
