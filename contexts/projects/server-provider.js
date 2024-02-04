import { getTokens } from 'next-firebase-auth-edge/lib/next/tokens'
import { cookies } from 'next/headers'
import { db } from '@/lib/firebase'
import { authConfig } from '@/config/server'
import { ProjectsProvider } from './client-provider'

export async function getUserProjects() {
  const tokens = await getTokens(cookies(), authConfig)

  if (!tokens) {
    throw new Error('Cannot get counter of unauthenticated user')
  }

  const snapshot = await db
    .collection('users')
    .doc(tokens.decodedToken.uid)
    .get()

  const userProjects = await snapshot.data()

  if (!userProjects) {
    return []
  }

  return userProjects.projects.filter((project) => !project?.finished)
}

export async function ServerProjectsProvider({ children }) {
  const projects = await getUserProjects()

  return <ProjectsProvider projects={projects}>{children}</ProjectsProvider>
}
