import { ServerAuthProvider } from '@/contexts/auth/server-provider'
import { StyledComponentsRegistry } from '@/lib/registry'
import '@/styles/reset.css'

export const metadata = {
  title: 'cddt',
  description: 'ToDo APP',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-color-mode="light">
      <body>
        <StyledComponentsRegistry>
          <ServerAuthProvider>
            <main>{children}</main>
          </ServerAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
