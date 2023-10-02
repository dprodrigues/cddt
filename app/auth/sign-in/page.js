'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SocialButtons from '@/components/authentication/social-buttons'
import { useUser } from '@/hooks/user'

export default function SignIn() {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (user?.email) {
      router.push('/app')
    }
  }, [user?.email, router])

  return <SocialButtons />
}
