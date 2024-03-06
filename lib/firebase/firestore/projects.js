import { v4 as uuid } from 'uuid';
import { collections } from '../colections';
import { formatProject } from '../utils';
import { getUser } from './users';
import { getDocument } from './common';

async function getUserProjects() {
  const { projects } = await getUser();

  if (!projects?.length) {
    return [];
  }

  return projects.map((project) => formatProject(project));
}

async function createNewProject() {
  const user = await getUser();
  const id = uuid();
  const project = {
    notes: [],
    title: `New project ${user.projects.length + 1}`,
    id,
  };

  const projects = [...user.projects, project];

  const document = await getDocument(collections.users, user.id);
  await document.update({ projects });

  return projects;
}

export { getUserProjects, createNewProject };
