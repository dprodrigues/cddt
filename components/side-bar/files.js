'use client'

import { useNotes } from '@/contexts/notes'
import { className } from './style'
import { FaRegSquare } from 'react-icons/fa'

export const Files = () => {
  const { dispatch, state } = useNotes()

  const handleClick = (note) => {
    dispatch({ type: 'SET_SELECTED_NOTE', value: note })
  }

  return (
    <ul className="text-sm">
      {state.notes.map((note) => (
        <li
          key={note.id}
          className="cursor-pointer"
          onClick={() => handleClick(note)}
        >
          <div className={className.item}>
            <FaRegSquare className={className.icon} />

            <span className="ms-3">{note.title}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
