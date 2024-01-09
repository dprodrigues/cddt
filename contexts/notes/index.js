import { useContext, createContext } from 'react'

const NotesContext = createContext()

const useNotes = () => {
  const context = useContext(NotesContext)

  if (!context) {
    throw new Error('useNotes must be used within the NotesProvider')
  }

  return context
}

export { NotesContext, useNotes }
