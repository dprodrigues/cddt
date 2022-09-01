import { HeaderBasic } from '@/components/header/basic'

export const LayoutAuth = ({ title, children }) => (
  <>
    <HeaderBasic />

    <div className="auth-container flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md flex items-center justify-center flex-col space-y-6 bg-white border-gray-200 shadow-2xl rounded-lg p-8">
        <h2 className="mb-3 text-center text-2xl font-bold text-gray-800">
          {title}
        </h2>

        {children}
      </div>
    </div>

    <style jsx>
      {`
        .auth-container {
          background-image: url(/images/auth-page-background.svg);
          background-repeat: no-repeat;
          background-position: bottom right;
          height: calc(100vh - 4.5rem);
        }
      `}
    </style>
  </>
)
