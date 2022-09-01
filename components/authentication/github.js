import { FaGithub } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { SocialButton } from './social-button'

export const GithubButton = () => {
  const { provider } = useFirebase()

  return (
    <SocialButton
      label="Github"
      icon={<FaGithub />}
      provider={provider.github}
    />
  )
}
