'use client'

import { FaCircle, FaCircleNotch } from 'react-icons/fa'
import { useNotes } from '@/contexts/notes'
import { List, Button } from './styles'

export const Files = () => {
  const { dispatch, state } = useNotes()

  const handleClick = (note) => {
    dispatch({ type: 'SET_SELECTED_NOTE', value: note })
  }

  return (
    <List>
      {state.notes.map((note) => {
        const Icon = state.selected?.id === note.id ? FaCircle : FaCircleNotch

        return (
          <li key={note.id}>
            <Button onClick={() => handleClick(note)}>
              <Icon />

              <span className="ms-3">{note.title}</span>
            </Button>
          </li>
        )
      })}
    </List>
  )
}
