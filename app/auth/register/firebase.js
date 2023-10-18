import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  useDeviceLanguage,
} from 'firebase/auth'

const CREDENTIAL_ALREADY_IN_USE_ERROR = 'auth/credential-already-in-use'
export const isCredentialAlreadyInUseError = (e) =>
  e?.code === CREDENTIAL_ALREADY_IN_USE_ERROR

export const logout = async (auth) => {
  return signOut(auth)
}

export const useGoogleProvider = (auth) => {
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  useDeviceLanguage(auth)
  provider.setCustomParameters({
    display: 'popup',
  })

  return provider
}

export const loginWithProvider = async (auth, provider) => {
  const result = await signInWithPopup(
    auth,
    provider,
    browserPopupRedirectResolver
  )

  return result.user
}
