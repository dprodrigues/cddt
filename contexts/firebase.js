import { createContext, useState, useEffect, useContext, useMemo } from 'react'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
  const [sections, setSections] = useState({
    auth: undefined,
    db: undefined,
    storage: undefined,
  })

  const value = useMemo(
    () => ({
      ...sections,
      provider: { google: new GoogleAuthProvider() },
    }),
    [sections]
  )

  useEffect(() => {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

    setSections({
      auth: getAuth(),
      db: getFirestore(app),
      storage: getStorage(),
    })
  }, [])

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

const useFirebase = () => {
  const context = useContext(FirebaseContext)

  if (!context) {
    throw new Error('useFirebase must not be used within a FirebaseProvider')
  }

  return context
}

export { FirebaseProvider, useFirebase }
