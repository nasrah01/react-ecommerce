import axios from '../api'
import useAuth from './useAuth'

const UseRefreshToken = () => {
  const { setLoggedIn } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setLoggedIn((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default UseRefreshToken;
