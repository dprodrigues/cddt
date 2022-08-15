import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/utils/constants'
import { Input } from './input'
import { SubmitButton } from './submit-button'

const schema = yup.object({
  email: yup
    .string()
    .required('The email is required')
    .matches(REGEX_EMAIL, 'Invalid email'),
  password: yup
    .string()
    .required('The password is required')
    .matches(REGEX_PASSWORD, 'Invalid password'),
})

export const SignInForm = () => {
  const { auth } = useFirebase()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      console.error(error)

      if (error.code === 'auth/wrong-password') {
        setError('password', { message: 'Password incorrect' })
      }

      if (error.code === 'auth/user-not-found') {
      }

      if (error.code === 'auth/too-many-requests') {
      }
    }
  })

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md space-y-2">
        <Input
          {...register('email')}
          autoComplete="email"
          error={errors['email']}
          errorMessage={errors['email']?.message}
          id="email"
          label="Email"
          type="email"
        />

        <Input
          {...register('password')}
          autoComplete="current-password"
          error={errors['password']}
          errorMessage={errors['password']?.message}
          id="password"
          label="Password"
          type="password"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          Don&apos;t have an account?{' '}
          <Link href="/auth/sign-up">
            <a className="font-medium text-rose-800 hover:text-rose-700">
              Sign up.
            </a>
          </Link>
        </div>

        <div>
          <Link href="/auth/recover-password">
            <a className="font-medium text-rose-800 hover:text-rose-700">
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>

      <SubmitButton text="Sign in" />
    </form>
  )
}
