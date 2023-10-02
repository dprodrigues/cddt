'use client'
import { FaGoogle } from 'react-icons/fa'
import { useFirebase } from '@/contexts/firebase'
import { SocialButton } from './social-button'

export const GoogleButton = () => {
  const { provider } = useFirebase()

  return (
    <SocialButton
      label="Google"
      icon={<FaGoogle />}
      provider={provider.google}
    />
  )
}
