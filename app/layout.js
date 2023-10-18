import { ServerAuthProvider } from '@/auth/server-auth-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/global.css'

export const metadata = {
  title: 'cddt',
  description: 'ToDo APP',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServerAuthProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </ServerAuthProvider>
      </body>
    </html>
  )
}
