'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/notes'
import MDEditor from '@uiw/react-md-editor'

const AppPage = () => {
  const {
    state: { selected },
  } = useNotes()
  const [value, setValue] = useState('')

  if (!selected?.id) {
    return null
  }

  if (!value) {
    setValue(`# ${selected.title}\n\n${selected.content}`)
  }

  return (
    <MDEditor
      value={value}
      onChange={setValue}
      height="100%"
      style={{ height: '100%', width: 'calc(100% - 16rem)' }}
    />
  )
}

export default AppPage
