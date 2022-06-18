import { useState } from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import { FcHighPriority } from "react-icons/fc";
import { Link } from 'react-router-dom'

const Login = () => {
  const [ error, setError ] = useState({});
  const [user, setUser ] = useState({ username:'', password: ''})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();


    if(user.username.trim() === '') {
      setError({ ...error, 'username': 'Username is required'})
      return
    }
    if (user.password.trim() === "") {
      setError({ ...error, password: "Password is required" });
      return
    }

    if(Object.keys(error).length === 0) {
      console.log('form can be sent')
    }

    setError({})
  };

  return (
    <div className="login__container">
      <div>
        <div className="login__header">
          <h2>Login</h2>
        </div>
        <form onSubmit={formSubmit}>
          <div className="form__container">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              aria-label="username"
              aria-required="true"
              className={error?.username ? "form__input--error" : "form__input"}
              value={user.username}
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="form__error">
              {error?.username && (
                <>
                  <FcHighPriority size={16} />
                  <p>{error.username}</p>
                </>
              )}
            </div>
          </div>
          <div className="form__container">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              aria-label="password"
              aria-required="true"
              className={error?.password ? "form__input--error" : "form__input"}
              value={user.password}
              onChange={handleChange}
            />
            <div className="form__error">
              {error?.password && (
                <>
                  <FcHighPriority size={16} />
                  <p>{error.password}</p>
                </>
              )}
            </div>
          </div>
          <div className="submit__btn">
            <button>Sign in</button>
          </div>
        </form>
        <div className="form__type">
          <p className="login__switch">
            Don't have an account?
            <span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
              <CgArrowLongRight size={18} />
            </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
