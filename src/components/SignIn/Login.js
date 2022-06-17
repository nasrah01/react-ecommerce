import { CgArrowLongRight } from "react-icons/cg";

const Login = () => {

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login__container">
      <div>
        <div className="login__header">
          <h2>Register</h2>
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
            />
          </div>
          <div className="form__container">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="text"
              placeholder="Enter your password"
              aria-label="password"
              aria-required="true"
            />
          </div>
          <div className="submit__btn">
            <button>Sign in</button>
          </div>
        </form>
        <div className="form__type">
          <p className="login__switch">
            Don't have an account?
            <span>
              Register
              <CgArrowLongRight size={18} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
