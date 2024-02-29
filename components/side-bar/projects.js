'use client';

import { Button, Flex } from '@radix-ui/themes';
import { FaCircle, FaCircleNotch, FaPlus } from 'react-icons/fa';
import { useProjects } from '@/contexts/projects';

function ProjectButton({ label, icon: Icon, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      style={{
        boxShadow: 'none',
        justifyContent: 'left',
        textTransform: 'capitalize',
      }}
    >
      <Icon />

      <span className="ms-3">{label}</span>
    </Button>
  );
}

export default function Projects() {
  const {
    dispatch,
    state: { projects, selected },
  } = useProjects();

  const handleClick = (project) => {
    dispatch({ type: 'SET_SELECTED_PROJECT', value: project });
  };

  return (
    <Flex direction="column">
      {projects?.map((project) => {
        const isSelected = selected?.id === project.id;

        return (
          <ProjectButton
            key={project.id}
            label={project.title}
            icon={isSelected ? FaCircle : FaCircleNotch}
            onClick={() => handleClick(project)}
          />
        );
      })}
    </Flex>
  );
}
