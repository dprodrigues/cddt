'use client'

import { useNotes } from '@/contexts/notes'
import { className } from './style'
import { FaCircle, FaCircleNotch } from 'react-icons/fa'

const Icon = ({ selected }) => {
  if (selected) {
    return <FaCircle className={className.icon} />
  }

  return <FaCircleNotch className={className.icon} />
}

export const Files = () => {
  const { dispatch, state } = useNotes()

  const handleClick = (note) => {
    dispatch({ type: 'SET_SELECTED_NOTE', value: note })
  }

  return (
    <ul className="text-sm overflow-x-hidden overflow-y-scroll">
      {state.notes.map((note) => (
        <li
          key={note.id}
          className="cursor-pointer"
          onClick={() => handleClick(note)}
        >
          <div className={className.item}>
            <Icon selected={state.selected?.id === note.id} />

            <span className="ms-3">{note.title}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
