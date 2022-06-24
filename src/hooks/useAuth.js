import { useContext } from 'react'
import LoginContext from '../context/loginContext'

const useAuth = () => {
  return useContext(LoginContext)
}

export default useAuth