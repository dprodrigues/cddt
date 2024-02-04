'use client'

import { Button, Flex } from '@radix-ui/themes'
import { FaCircle, FaCircleNotch } from 'react-icons/fa'
import { useProjects } from '@/contexts/projects'

function ProjectButton({ project, selected, onClick }) {
  const Icon = selected ? FaCircle : FaCircleNotch

  return (
    <Button
      onClick={() => onClick(project)}
      variant="outline"
      style={{ boxShadow: 'none', justifyContent: 'left' }}
    >
      <Icon />

      <span className="ms-3">{project.title}</span>
    </Button>
  )
}

export default function Projects() {
  const {
    dispatch,
    state: { projects, selected },
  } = useProjects()

  const handleClick = (project) => {
    dispatch({ type: 'SET_SELECTED_PROJECT', value: project })
  }

  return (
    <Flex direction="column">
      {projects.map((project) => (
        <ProjectButton
          key={project.id}
          project={project}
          selected={selected?.id === project.id}
          onClick={handleClick}
        />
      ))}
    </Flex>
  )
}
