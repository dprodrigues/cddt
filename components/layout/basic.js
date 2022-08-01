import { HeaderBasic } from 'components/header/basic'

export const LayoutBasic = ({ children }) => (
  <>
    <HeaderBasic />
    {children}
  </>
)
