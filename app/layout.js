import { ServerAuthProvider } from '@/contexts/auth/server-provider'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

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
    <html lang="en" data-color-mode="light">
      <body>
        <ServerAuthProvider>
          <Theme>
            <main>{children}</main>
          </Theme>
        </ServerAuthProvider>
      </body>
    </html>
  )
}
