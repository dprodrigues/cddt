import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const LayoutMain = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
