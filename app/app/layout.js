import { ServerNotesProvider } from '@/contexts/notes/server-provider'

export default function RootLayout({ children }) {
  return <ServerNotesProvider>{children}</ServerNotesProvider>
}
