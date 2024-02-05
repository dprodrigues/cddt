'use client'

import { Box, Heading } from '@radix-ui/themes'
import { useProjects } from '@/contexts/projects'
import List from '@/components/list'

export default function App() {
  const {
    state: { selected },
  } = useProjects()

  console.log('selected:', selected)

  if (!selected?.id) {
    return null
  }

  return (
    <Box p="5" width="100%">
      <Heading mb="9">{selected.title}</Heading>

      <List type={selected.type} items={selected.items} />
    </Box>
  )
}
