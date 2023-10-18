import { ServerAuthProvider } from '@/auth/server-auth-provider'

export default function RegisterLayout({ children }) {
  return <ServerAuthProvider>{children}</ServerAuthProvider>
}
