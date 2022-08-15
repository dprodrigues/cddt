import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/utils/constants'
import { Input } from './input'
import { SubmitButton } from './submit-button'

const schema = yup.object({
  email: yup.string().required().matches(REGEX_EMAIL),
  password: yup.string().required().matches(REGEX_PASSWORD),
  'confirm-password': yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
})

export const SignUpForm = () => {
  const { auth } = useFirebase()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md space-y-2">
        <Input
          {...register('email')}
          autoComplete="email"
          error={errors['email']}
          id="email"
          label="Email"
          type="email"
        />

        <Input
          {...register('password')}
          autoComplete="current-password"
          error={errors['password']}
          id="password"
          label="Password"
          type="password"
        />

        <Input
          {...register('confirm-password')}
          autoComplete="current-password"
          error={errors['confirm-password']}
          id="confirm-password"
          label="Confirm Password"
          type="password"
        />
      </div>

      <SubmitButton text="Sign up" />
    </form>
  )
}
