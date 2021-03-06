import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  const {loggedIn} = useAuth()
  const location = useLocation()
  console.log(loggedIn)

  return (
    loggedIn?.accessToken ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace={true} />
  )
}

export default RequireAuth