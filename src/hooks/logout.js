import axios from '../api'
import useAuth from './useAuth'

const UseLogout = () => {
  const {setLoggedIn} = useAuth()

  const logout = async () => {
    setLoggedIn({})

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios('/auth/logout', {
        withCredentials: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  return logout
}

export default UseLogout