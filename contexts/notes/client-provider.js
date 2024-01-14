'use client'

import { useReducer, useMemo } from 'react'
import { NotesContext } from '.'

const initialState = {
  notes: [],
  selected: undefined,
}

const reducer = (state, action) => {
  switch (action?.type) {
    case 'SET_SELECTED_NOTE': {
      return { ...state, selected: action.value }
    }
    default: {
      return state
    }
  }
}

export const NotesProvider = ({ children, notes }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    notes,
    selected: notes?.length ? notes[0] : undefined,
  })

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}
