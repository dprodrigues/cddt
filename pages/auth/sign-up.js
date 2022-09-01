import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SocialMediaButtons } from '@/components/authentication'
import { LayoutAuth } from '@/components/layout'
import { useUser } from '@/hooks/user'

const SignUp = () => {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (user?.email) {
      router.push('/app')
    }
  }, [user, router])

  return <SocialMediaButtons />
}

SignUp.getLayout = (page) => (
  <LayoutAuth title="Sign up on cddt. :D">{page}</LayoutAuth>
)

export default SignUp
