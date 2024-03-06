import { Box, Heading, Flex, IconButton, TextField } from '@radix-ui/themes';
import { FaTimes } from 'react-icons/fa';
import { useProjects } from '@/contexts/projects';

export default function SelectedProject({ project }) {
  const { dispatch } = useProjects();

  function handleClose() {
    dispatch({ type: 'SET_SELECTED_PROJECT', value: undefined });
  }

  return (
    <Box>
      <Flex justify="between">
        <Heading style={{ outline: 'none' }} contentEditable>
          {project.title}
        </Heading>

        <IconButton
          variant="outline"
          style={{ boxShadow: 'none' }}
          onClick={handleClose}
        >
          <FaTimes />
        </IconButton>
      </Flex>
    </Box>
  );
}
