import { FaTwitter } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { SocialButton } from './social-button'

export const TwitterButton = () => {
  const { provider } = useFirebase()

  return (
    <SocialButton
      label="Twitter"
      icon={<FaTwitter />}
      provider={provider.twitter}
    />
  )
}
