'use client'

import { Avatar, Flex, Text } from '@radix-ui/themes'
import { useAuth } from '@/contexts/auth'

export default function User() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <Flex align="center">
      <Avatar
        src={user.photoURL}
        fallback={user?.displayName ? user.displayName[0] : user?.email?.[0]}
      />

      <Text size="2" ml="2" weight="medium">
        {user.displayName}
      </Text>
    </Flex>
  )
}
