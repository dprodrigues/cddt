'use client'
import { usePathname } from 'next/navigation'

export default function LayoutAuth({ children }) {
  const pathname = usePathname()
  const title = pathname.includes('sign-up')
    ? 'Sign up on cddt. :D'
    : 'Sign in with social media'

  return (
    <>
      <div className="auth-container flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="box w-full max-w-md flex items-center justify-center flex-col space-y-4 bg-white border-gray-200 shadow-2xl rounded-lg p-4 ">
          <h2 className="mb-3 text-center text-2xl font-bold text-gray-900">
            {title}
          </h2>

          {children}
        </div>
      </div>

      <style jsx scoped>
        {`
          .auth-container {
            background-image: url(/images/auth-page-background.svg);
            background-repeat: no-repeat;
            background-position: bottom right;
            height: calc(100vh - 4.5rem);
          }

          .box {
            background: #c4c4c430;
            max-width: 40vw;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
