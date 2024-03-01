import { Button } from '@radix-ui/themes';
import { FaPlus } from 'react-icons/fa';

export default function AddProject({ onClick }) {
  return (
    <Button
      variant="outline"
      mt="2"
      style={{ boxShadow: 'none', width: '100%', justifyContent: 'left' }}
      onClick={onClick}
    >
      <FaPlus />
      Add new project
    </Button>
  );
}
