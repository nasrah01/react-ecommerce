import {Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import UseRefreshToken from '../../hooks/refreshToken'
import useAuth from '../../hooks/useAuth'

const PersistLoggin = () => {
  const [isLoading, setLoading] = useState(true)
  const refresh = UseRefreshToken()
  const {loggedIn} = useAuth()

  useEffect(() => {
  let isMounted = true;

  const verifyRefreshToken = async () => {
    try {
      await refresh();
    } catch (err) {
      console.error(err);
    } finally {
      isMounted && setLoading(false);
    }
  };

  !loggedIn?.accessToken ? verifyRefreshToken() : setLoading(false);

  return () => (isMounted = false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      {
        isLoading ? <p>loading...</p> : <Outlet />
      }
    </>
  )
}

export default PersistLoggin