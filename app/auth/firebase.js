import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const CREDENTIAL_ALREADY_IN_USE_ERROR = 'auth/credential-already-in-use';

export const isCredentialAlreadyInUseError = (e) => {
  return e?.code === CREDENTIAL_ALREADY_IN_USE_ERROR;
};

export const logout = async (auth) => {
  return signOut(auth);
};

export const getGoogleProvider = () => new GoogleAuthProvider();

export const getGithubProvider = () => new GithubAuthProvider();

export const getTwitterProvider = () => new TwitterAuthProvider();

export const loginWithProvider = async (auth, provider) => {
  const result = await signInWithPopup(
    auth,
    provider,
    browserPopupRedirectResolver
  );

  return result.user;
};
