import { FirebaseProvider } from '@/contexts/firebase'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/global.css'

export const metadata = {
  title: 'CDDT',
  description: 'ToDo APP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FirebaseProvider>
        <body>
          <Header />

          {children}

          <Footer />
        </body>
      </FirebaseProvider>
    </html>
  )
}
