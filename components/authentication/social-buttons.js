'use client'
import { GoogleButton } from './google'
import { GithubButton } from './github'
import { TwitterButton } from './twitter'

export default function SocialMediaButtons() {
  return (
    <div className="flex w-full flex-col space-y-4">
      <GoogleButton />

      <GithubButton />

      <TwitterButton />
    </div>
  )
}
