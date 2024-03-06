'use client';

import { Flex } from '@radix-ui/themes';
import User from './user';
import Navigation from './navigation';
import Projects from './projects';
import AddProject from './add-project';
import { useProjects } from '@/contexts/projects';

const flexStyle = {
  backgroundColor: 'rgb(249, 250, 251)',
  borderRight: '1px solid rgb(243, 244, 246)',
  width: '16rem',
};

export default function Sidebar() {
  const { dispatch } = useProjects();

  async function addProject() {
    try {
      const response = await fetch('/projects', { method: 'POST', body: {} });
      const data = await response.json();

      if (!data?.projects?.length) {
        return;
      }

      dispatch({ type: 'SET_PROJECTS', value: data.projects });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddProjectClick() {
    await addProject();
  }

  return (
    <Flex
      direction="column"
      py="6"
      px="4"
      gap="8"
      height="100%"
      style={flexStyle}
    >
      <User />

      <Navigation />

      <div>
        <Projects />

        <AddProject onClick={handleAddProjectClick} />
      </div>
    </Flex>
  );
}
