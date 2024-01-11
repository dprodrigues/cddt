'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/notes'

const AppPage = () => {
  const { state } = useNotes()
  const [value, setValue] = useState('')

  if (!state.selected?.id) {
    return null
  }

  return (
    <>
      <div className="h-appFull flex">
        <div>
          <h2>{state.selected.title}</h2>

          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>

      <article className="prose prose-slate">{markdown}</article>
    </>
  )
}

export default AppPage
