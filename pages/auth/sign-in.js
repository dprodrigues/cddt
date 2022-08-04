import { useRouter } from 'next/router'
import { LayoutBasic } from '@/components/layout/basic'
import { SignInForm, SocialMediaButtons } from '@/components/authentication'
import { useUser } from '@/hooks/user'

const SignIn = () => {
  const router = useRouter()
  const { user } = useUser()

  if (user) {
    router.push('/')
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="space-y-6 bg-white border-gray-200 border rounded-lg p-8">
          <SignInForm />

          <div className="text-sm flex justify-center text-gray-400">
            Or continue with
          </div>

          <SocialMediaButtons />
        </div>
      </div>
    </div>
  )
}

SignIn.getLayout = (page) => <LayoutBasic>{page}</LayoutBasic>

export default SignIn
