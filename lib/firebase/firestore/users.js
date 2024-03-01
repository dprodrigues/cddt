import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens';
import { cookies } from 'next/headers';
import { authConfig } from '@/config/server';
import { collections } from '../colections';
import { db } from '../index';
import { getDocumentData } from './common';

async function getUserID() {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error('Cannot get counter of unauthenticated user');
  }

  return tokens?.decodedToken?.uid;
}

async function getUser() {
  const id = await getUserID();

  if (!id) {
    return {};
  }

  const document = await getDocumentData(collections.users, id);

  return { id, ...document };
}

// TODO: finish this method.
async function createUser() {
  return db.collection(collections.users);
}

export { getUser, createUser };
