import { FirebaseProvider } from '@/contexts/firebase'
import '@/styles/global.css'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <FirebaseProvider>
      {getLayout(<Component {...pageProps} />)}
    </FirebaseProvider>
  )
}

export default MyApp
