import Login from '../components/SignIn/Login'
import Register from '../components/SignIn/Register'
import { useState, useEffect } from 'react'

const Signin = () => {

const [ mode, setMode ] = useState(false)

useEffect(() => {
  setMode(true)
}, [])


 return (
   mode ? <Register /> : <Login />
 )
}

export default Signin