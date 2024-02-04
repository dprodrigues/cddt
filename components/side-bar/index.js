'use client'

import { Flex } from '@radix-ui/themes'
import User from './user'
import Navigation from './navigation'
import Projects from './projects'

const flexStyle = {
  backgroundColor: 'rgb(249, 250, 251)',
  borderRight: '1px solid rgb(243, 244, 246)',
  width: '16rem',
}

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      py="6"
      px="4"
      gap="8"
      height="100%"
      style={flexStyle}
    >
      <User />

      <Navigation />

      <Projects />
    </Flex>
  )
}
