'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  loginWithProvider,
  getGoogleProvider,
  getGithubProvider,
  getTwitterProvider,
} from '../firebase'
import SocialButtons from '@/components/authentication/social-buttons'
import { useFirebaseAuth } from '@/auth/firebase'

const login = async (getFirebaseAuth, provider) => {
  const auth = getFirebaseAuth()
  const user = await loginWithProvider(auth, provider)
  const idTokenResult = await user.getIdTokenResult()

  await fetch('/api/login', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${idTokenResult.token}`,
    },
  })
}

export function RegisterPage() {
  const router = useRouter()
  const params = useSearchParams()
  const { getFirebaseAuth } = useFirebaseAuth()
  const redirect = params?.get('redirect')

  const providers = {
    google: getGoogleProvider(),
    github: getGithubProvider(),
    twitter: getTwitterProvider(),
  }

  const handleLogin = (provider) => () => {
    login(getFirebaseAuth, provider)

    router.push(redirect ?? '/app')
  }

  return <SocialButtons providers={providers} onLogin={handleLogin} />
}
