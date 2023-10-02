'use client'
import { signInWithPopup } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'

export const SocialButton = ({ label, icon, provider }) => {
  const { auth } = useFirebase()

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <div className="w-full group">
      <button
        onClick={handleLogin}
        className="w-full inline-flex items-center justify-center text-rose-800 group-hover:text-rose-700 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-4 px-5 border border-gray-100 transform-gpu group-hover:-translate-y-0.5 transition-all duration-150"
      >
        {icon}

        <p className="w-full mt-1 text text-center text-sm font-medium text-gray-900">
          {label}
        </p>
      </button>
    </div>
  )
}
