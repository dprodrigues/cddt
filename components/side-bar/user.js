'use client'

import Image from 'next/image'
import { useAuth } from '@/contexts/auth'

export const User = () => {
  const { user } = useAuth()

  return (
    <div className="flex items-center justify">
      {user?.photoURL ? (
        <Image
          src={user.photoURL}
          alt="User image"
          height={32}
          width={32}
          className="rounded-lg border-2 border-black"
        />
      ) : (
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 text-white uppercase font-bold border-2 border-black">
          {user?.displayName ? user.displayName[0] : user?.email?.[0]}
        </div>
      )}

      <p className="ml-2 text-sm font-medium">{user.displayName}</p>
    </div>
  )
}
