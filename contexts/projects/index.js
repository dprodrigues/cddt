import { useContext, createContext } from 'react';

const ProjectsContext = createContext();

const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error('useProjects must be used within the ProjectsProvider');
  }

  return context;
};

export { ProjectsContext, useProjects };
