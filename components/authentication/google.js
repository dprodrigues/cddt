import { signInWithPopup } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { SocialButton } from './social-button'

export const GoogleButton = () => {
  const { auth, provider } = useFirebase()

  const handleClick = async () => {
    try {
      await signInWithPopup(auth, provider.google)
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <SocialButton onClick={handleClick}>
      <FaGoogle />
    </SocialButton>
  )
}
