import { ServerAuthProvider } from '@/contexts/auth/server-provider'
import '@/styles/reset.css'

export const metadata = {
  title: 'cddt',
  description: 'ToDo APP',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServerAuthProvider>
          <main>{children}</main>
        </ServerAuthProvider>
      </body>
    </html>
  )
}
