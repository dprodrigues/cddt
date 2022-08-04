import { useRouter } from 'next/router'
import { signInWithPopup } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { SocialButton } from './social-button'

export const GoogleButton = () => {
  const router = useRouter()
  const { auth, provider } = useFirebase()

  const handleClick = () => {
    signInWithPopup(auth, provider.google)
      .then(() => router.push('/app'))
      .catch((error) => console.error('error:', error))
  }

  return (
    <SocialButton onClick={handleClick}>
      <FaGoogle />
    </SocialButton>
  )
}
