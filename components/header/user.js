import { signOut } from 'firebase/auth'
import { useFirebase } from '@/contexts/firebase'

export const User = () => {
  const { auth } = useFirebase()

  const handleClick = () => {
    console.log(' here')
    signOut(auth)
      .then((value) => console.log('value:', value))
      .catch((error) => console.error(error))
  }

  return <button onClick={handleClick}>log out</button>
}
