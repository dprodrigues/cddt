'use client'

import { useState, useReducer, useMemo } from 'react'
import { NotesContext } from '.'

const initialState = {
  notes: [],
  selected: {},
}

const reducer = (state, action) => {
  console.log('state:', state)
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
  const [state, dispatch] = useReducer(reducer, { ...initialState, notes })

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}
