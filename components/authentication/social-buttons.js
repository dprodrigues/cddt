import { GoogleButton } from './google'
import { GithubButton } from './github'
import { TwitterButton } from './twitter'

export const SocialMediaButtons = () => (
  <div className="flex w-full flex-col space-y-4">
    <GoogleButton />

    <GithubButton />

    <TwitterButton />
  </div>
)
