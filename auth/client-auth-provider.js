'use client'

import * as React from 'react'
import { onIdTokenChanged } from 'firebase/auth'
import { useFirebaseAuth } from './firebase'
import { AuthContext } from './context'
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims'

function toUser(user, idTokenResult) {
  return {
    ...user,
    customClaims: filterStandardClaims(idTokenResult.claims),
  }
}

export const AuthProvider = ({ defaultUser, children }) => {
  const { getFirebaseAuth } = useFirebaseAuth()
  const [user, setUser] = React.useState(defaultUser)

  const handleIdTokenChanged = async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null)
      return
    }

    const idTokenResult = await firebaseUser.getIdTokenResult()

    setUser(toUser(firebaseUser, idTokenResult))
  }

  const registerChangeListener = async () => {
    const auth = getFirebaseAuth()
    return onIdTokenChanged(auth, handleIdTokenChanged)
  }

  React.useEffect(() => {
    const unsubscribePromise = registerChangeListener()

    return () => {
      unsubscribePromise.then((unsubscribe) => unsubscribe())
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
