import { useState } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

const Login = () => {

  const [isSignup, setSignup] = useState(false)

   const switchMode = () => {
     setSignup((prevIsSignup) => !prevIsSignup);
   };

   const formSubmit = (e) => {
     e.preventDefault();
   }

  return (
    <div className="login__container">
      <div>
        <div className="login__header">
          <h2>{isSignup ? "Register" : "Sign In"}</h2>
        </div>
        <form onSubmit={formSubmit}>
          {isSignup && (
            <>
              <div className="form__container">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Please enter firstname"
                  aria-label="first name"
                  aria-required="true"
                />
              </div>
              <div className="form__container">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Please enter surname"
                  aria-label="surname name"
                  aria-required="true"
                />
              </div>
            </>
          )}
          <div className="form__container">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              aria-label="username"
              aria-required="true"
            />
          </div>
          <div className="form__container">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              aria-label="password"
              aria-required="true"
            />
          </div>
          {isSignup && (
            <div className="form__container">
              <label>Confirm Password</label>
              <input
                type="text"
                placeholder="Please confirm password"
                aria-label="confirm password"
                aria-required="true"
              />
            </div>
          )}
          <div className="submit__btn">
            <button>{isSignup ? "Register" : "Sign In"}</button>
          </div>
        </form>
        <div className="form__type">
          <p className="login__switch">
            {isSignup ? "Already have an account?" : "Dont have an account?"}
            <span onClick={switchMode}>
              {isSignup ? "Sign In" : "Register"} <CgArrowLongRight size={18} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login