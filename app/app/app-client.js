'use client';

import { Box, Flex, Heading } from '@radix-ui/themes';
import Greetings from '@/components/greetings';
import { useProjects } from '@/contexts/projects';

export default function AppClient() {
  const {
    state: { selected },
  } = useProjects();

  return (
    <Box px="4" py="6">
      <Flex direction="column">
        <Greetings />

        {selected && <Heading>{selected.title}</Heading>}
      </Flex>
    </Box>
  );
}
