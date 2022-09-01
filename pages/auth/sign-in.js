import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SocialMediaButtons } from '@/components/authentication'
import { LayoutAuth } from '@/components/layout'
import { useUser } from '@/hooks/user'

const SignIn = () => {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (user?.email) {
      router.push('/app')
    }
  }, [user?.email, router])

  return <SocialMediaButtons />
}

SignIn.getLayout = (page) => (
  <LayoutAuth title="Sign in with social media">{page}</LayoutAuth>
)

export default SignIn
