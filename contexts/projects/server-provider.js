import { ProjectsProvider } from './client-provider';
import { getUserProjects } from '@/lib/firebase/firestore';

export async function ServerProjectsProvider({ children }) {
  const projects = await getUserProjects();

  return <ProjectsProvider projects={projects}>{children}</ProjectsProvider>;
}
