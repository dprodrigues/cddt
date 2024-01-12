import { SideBar } from '@/components/side-bar'
import { ServerNotesProvider } from '@/contexts/notes/server-provider'
import { Container } from '@/styles/app'

export default function RootLayout({ children }) {
  return (
    <ServerNotesProvider>
      <Container>
        <SideBar />

        {children}
      </Container>
    </ServerNotesProvider>
  )
}
