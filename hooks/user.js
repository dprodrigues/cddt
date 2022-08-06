import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'

export const useUser = () => {
  const [user, setUser] = useState({
    uid: undefined,
    displayName: undefined,
    email: undefined,
    photoURL: undefined,
  })
  const [loading, setLoading] = useState(true)
  const { auth } = useFirebase()

  useEffect(() => {
    if (!auth) {
      return
    }

    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid, displayName, email, photoURL } = user
          setUser({ uid, displayName, email, photoURL })
        } else setUser(null)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })
    return () => unsubscriber()
  }, [auth])

  return { user, loading }
}
