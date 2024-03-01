'use client';

import { useReducer, useMemo } from 'react';
import { ProjectsContext } from '.';

const initialState = {
  projects: [],
  selected: undefined,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case 'SET_PROJECTS': {
      return { ...state, projects: action.value };
    }
    case 'SET_SELECTED_PROJECT': {
      return { ...state, selected: action.value };
    }
    default: {
      return state;
    }
  }
};

export const ProjectsProvider = ({ children, projects }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, projects });

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
