import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { clientConfig } from '@/config/client';

function getFirebaseApp(options) {
  return !getApps().length ? initializeApp(options) : getApp();
}

function useFirebaseAuth() {
  function getFirebaseAuth() {
    const auth = getAuth(getFirebaseApp(clientConfig));

    return auth;
  }

  return { getFirebaseAuth };
}

export { getFirebaseApp, useFirebaseAuth };
