import { Navigation } from './navigation'
import { Files } from './files'
import { User } from './user'

export const SideBar = () => {
  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="h-full px-4 py-6 space-y-10 overflow-y-auto bg-gray-50 border-r border-gray-100">
        <User />

        <Navigation />

        <Files />
      </div>
    </aside>
  )
}
