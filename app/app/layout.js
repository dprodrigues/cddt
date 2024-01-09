import { SideBar } from '@/components/side-bar'
import { ServerNotesProvider } from '@/contexts/notes/server-provider'

export default function RootLayout({ children }) {
  return (
    <ServerNotesProvider>
      <div className="flex">
        <SideBar />

        {children}
      </div>
    </ServerNotesProvider>
  )
}
