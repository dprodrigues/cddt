import { v4 as uuidv4 } from 'uuid'
import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens'
import { cookies } from 'next/headers'
import { db } from '@/lib/firebase'
import { authConfig } from '@/config/server'
import { NotesProvider } from './client-provider'

async function getUserID() {
  const tokens = await getTokens(cookies(), authConfig)

  if (!tokens) {
    throw new Error('Cannot get counter of unauthenticated user')
  }

  return tokens.decodedToken.uid
}

async function getUserDocument() {
  const id = getUserID()

  return db.collection('users').doc(id)
}

async function getUser() {
  const snapshot = await getUserDocument().get()

  return {
    data: snapshot.data(),
    tokens,
  }
}

export async function getUserProjects() {
  const { data } = await getUser()

  return {
    notes: data.notes,
    tasks: data.tasks,
  }
}

export async function createProject() {
  // const { tokens } = await getUser()
  const id = uuidv4()

  // db.collection('users').doc(tokens.decodedToken.uid).update()
  const snapshot = await getUserDocument().update()
  // snapshot.update()
}

export async function ServerNotesProvider({ children }) {
  const notes = await getUserNotes()

  return <NotesProvider notes={notes}>{children}</NotesProvider>
}
