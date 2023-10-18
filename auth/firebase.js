import { getApp, getApps, initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { clientConfig } from '../config/client'

const getFirebaseApp = (options) => {
  return !getApps().length ? initializeApp(options) : getApp()
}

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
