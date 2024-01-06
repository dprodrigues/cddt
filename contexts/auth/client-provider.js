'use client'

import React, { useState, useEffect } from 'react'
import { onIdTokenChanged } from 'firebase/auth'
import { useFirebaseAuth } from '../../auth/firebase'
import { AuthContext } from '.'
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims'

function toUser(user, idTokenResult) {
  return {
    ...user,
    customClaims: filterStandardClaims(idTokenResult.claims),
  }
}

export const AuthProvider = ({ defaultUser, children }) => {
  const { getFirebaseAuth } = useFirebaseAuth()
  const [user, setUser] = useState(defaultUser)
  const [loading, setLoading] = useState(true)

  const handleIdTokenChanged = async (firebaseUser) => {
    setLoading(false)

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

  useEffect(() => {
    const unsubscribePromise = registerChangeListener()

    return () => {
      unsubscribePromise.then((unsubscribe) => unsubscribe())
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
