import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { getFirebaseApp } from '@/lib/firebaseApp'
import { clientConfig } from '@/config/client'

export const useFirebaseAuth = () => {
  const getFirebaseAuth = () => {
    const auth = getAuth(getFirebaseApp(clientConfig))

    if (process.env.NEXT_PUBLIC_EMULATOR_HOST) {
      auth._canInitEmulator = true

      connectAuthEmulator(auth, process.env.NEXT_PUBLIC_EMULATOR_HOST, {
        disableWarnings: true,
      })
    }

    return auth
  }

  return { getFirebaseAuth }
}
