'use client'

import { Box, Flex, Heading } from '@radix-ui/themes'
import Greetings from '@/components/greetings'

export default function AppClient() {
  return (
    <Box px="4" py="6">
      <Flex direction="column">
        <Greetings />
      </Flex>
    </Box>
  )
}
