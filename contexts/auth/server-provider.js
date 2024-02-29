import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens';
import { cookies } from 'next/headers';
import { AuthProvider } from './client-provider';
import { authConfig } from '../../config/server';
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims';

const mapTokensToUser = ({ decodedToken }) => {
  const {
    uid,
    email,
    picture: photoURL,
    email_verified: emailVerified,
    phone_number: phoneNumber,
    name: displayName,
  } = decodedToken;

  const customClaims = filterStandardClaims(decodedToken);

  return {
    uid,
    email: email ?? null,
    displayName: displayName ?? null,
    photoURL: photoURL ?? null,
    phoneNumber: phoneNumber ?? null,
    emailVerified: emailVerified ?? false,
    customClaims,
  };
};

export async function ServerAuthProvider({ children }) {
  const tokens = await getTokens(cookies(), authConfig);
  const user = tokens ? mapTokensToUser(tokens) : null;

  return <AuthProvider defaultUser={user}>{children}</AuthProvider>;
}
