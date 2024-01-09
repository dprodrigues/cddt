import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens'
import { cookies } from 'next/headers'
import { db } from '@/lib/firebase'
import { authConfig } from '@/config/server'
import { NotesProvider } from './client-provider'

export async function getUserNotes() {
  const tokens = await getTokens(cookies(), authConfig)

  if (!tokens) {
    throw new Error('Cannot get counter of unauthenticated user')
  }

  const snapshot = await db
    .collection('users')
    .doc(tokens.decodedToken.uid)
    .get()

  const userNotes = await snapshot.data()

  if (!userNotes) {
    return []
  }

  return userNotes.notes.filter((note) => !note.finished)
}

export async function ServerNotesProvider({ children }) {
  const notes = await getUserNotes()

  return <NotesProvider notes={notes}>{children}</NotesProvider>
}
