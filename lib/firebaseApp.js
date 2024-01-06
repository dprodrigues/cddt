import { getApp, getApps, initializeApp } from 'firebase/app'

export const getFirebaseApp = (options) => {
  return !getApps().length ? initializeApp(options) : getApp()
}
