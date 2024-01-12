'use client'

import styled from 'styled-components'
import NextImage from 'next/image'
import { useAuth } from '@/contexts/auth'

const Container = styled.div`
  align-items: center;
  display: flex;
`

const Image = styled(NextImage)`
  border: 2px solid rgb(55, 65, 81);
  border-radius: 0.5rem;
`

const Name = styled.p`
  color: rgb(55, 65, 81);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-left: 0.5rem;
`

export const User = () => {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <Container>
      {user?.photoURL ? (
        <Image src={user.photoURL} alt="User image" height={40} width={40} />
      ) : (
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 text-white uppercase font-bold border-2 border-black">
          {user?.displayName ? user.displayName[0] : user?.email?.[0]}
        </div>
      )}

      <Name>{user.displayName}</Name>
    </Container>
  )
}
