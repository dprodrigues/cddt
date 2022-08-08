import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'

export const useUser = () => {
  const [state, setState] = useState({
    user: null,
    loading: true,
  })
  const { auth } = useFirebase()

  useEffect(() => {
    if (!auth) {
      return
    }

    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      setState({ user, loading: false })
    })

    return () => unsubscriber()
  }, [auth])

  return state
}
