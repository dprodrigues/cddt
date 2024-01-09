import { Header } from './header'
import { Files } from './files'

export const SideBar = () => {
  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="h-full px-4 py-6 space-y-10 overflow-y-auto bg-gray-50">
        <Header />

        <Files />
      </div>
    </aside>
  )
}
