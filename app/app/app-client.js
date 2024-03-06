'use client';

import { Box, Flex } from '@radix-ui/themes';
import Greetings from '@/components/greetings';
import SelectedProject from '@/components/project/selected';
import { useProjects } from '@/contexts/projects';

export default function AppClient() {
  const {
    state: { selected },
  } = useProjects();

  return (
    <Box p="7" width="100%">
      <Flex direction="column">
        <Greetings />

        {selected && <SelectedProject project={selected} />}
      </Flex>
    </Box>
  );
}
