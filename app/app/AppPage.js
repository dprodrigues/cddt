'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/notes'
import MDEditor from '@uiw/react-md-editor'
// import { Content, Title } from '@/styles/app'

const AppPage = () => {
  const {
    state: { selected },
  } = useNotes()
  const [value, setValue] = useState(selected?.content)

  if (!selected?.id) {
    return null
  }

  // if (!value) {
  //   setValue(`# ${selected.title}\n\n${selected.content}`)
  // }

  return (
    <>
      {/* <Title>{selected?.title}</Title> */}

      <MDEditor value={value} onChange={setValue} height="100%" />
    </>
  )
}

export default AppPage
