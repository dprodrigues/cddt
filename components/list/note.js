import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

export default function Note({ id, title, content }) {
  const [expanded, setExpanded] = useState(false)

  function handleExpandClick() {
    setExpanded((prev) => !prev)
  }

  if (expanded) {
    return <Expanded />
  }

  return (
    <Flex onClick={handleExpandClick}>
      <div>{title}</div>

      <div>{content}</div>
    </Flex>
  )
}

function Expanded() {
  return <div>expanded</div>
}
