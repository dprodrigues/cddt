import { collections } from '../colections';
import { formatProject } from '../utils';
import { getUser } from './users';
import { getDocument, getDocumentData, createCollection } from './common';

const PROJECT_MODEL = {
  title: 'New project',
  notes: [],
};

async function getProjects(ids) {
  const projects = [];

  for (const id of ids) {
    const project = await getDocumentData(collections.projects, id);

    projects.push(formatProject(project));
  }

  return projects;
}

async function updateUserProjects(projectId) {
  const { id, projects } = await getUser();

  const document = await getDocument(collections.users, id);

  return document.update({ projects: [...projects, projectId] });
}

async function getUserProjects() {
  const { projects } = await getUser();

  if (!projects?.length) {
    return [];
  }

  return getProjects(projects);
}

async function createProject() {
  const ref = await createCollection(collections.projects, PROJECT_MODEL);

  await updateUserProjects(ref.id);
}

export { getUserProjects, createProject };
