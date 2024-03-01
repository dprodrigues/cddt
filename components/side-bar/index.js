'use client';

import { Flex } from '@radix-ui/themes';
import User from './user';
import Navigation from './navigation';
import Projects from './projects';
import AddProject from './add-project';

const flexStyle = {
  backgroundColor: 'rgb(249, 250, 251)',
  borderRight: '1px solid rgb(243, 244, 246)',
  width: '16rem',
};

export default function Sidebar() {
  async function handleAddNewProject() {
    fetch('/projects', { method: 'POST', body: {} })
      .then((res) => res.json())
      .then((json) => {
        console.log('json:', json);
      })
      .catch((error) => {
        console.error(error);
      });
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

        <AddProject onClick={handleAddNewProject} />
      </div>
    </Flex>
  );
}
