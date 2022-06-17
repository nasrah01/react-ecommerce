import { useState, useEffect, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";

const initialState = {
  forename: "",
  surname: "",
  email: "",
  username: "",
  password: "",
};

const nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

const Register = () => {
  const [isValid, setIsValid] = useState(false)
  const [register, setRegisterUser] = useState(initialState)
  const [inputFocus, setInputFocus] = useState(false)
  const [error, setError] = useState({})
  const [isRegister, setRegister] = useState(false)
  const userRef = useRef()
  const errRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  }, [])
  
   const handleChange = (e) => {
     const { name, value } = e.target;
     setRegisterUser({ ...register, [name]: value });
   };

  const formSubmit = (e) => {
    setRegister(true)
    setIsValid(true)
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
            <label htmlFor="forename">First Name</label>
            <input
              name="forename"
              type="text"
              placeholder="Please enter firstname"
              aria-label="first name"
              aria-required="true"
              onChange={handleChange}
              ref={userRef}
              autoComplete="off"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
          </div>
          <div className="form__container">
            <label htmlFor="surname">Last Name</label>
            <input
              name="surname"
              type="text"
              placeholder="Please enter surname"
              aria-label="surname name"
              aria-required="true"
              onChange={handleChange}
              ref={userRef}
              autoComplete="off"
            />
          </div>
          <div className="form__container">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              aria-label="email"
              aria-required="true"
              onChange={handleChange}
              ref={userRef}
              autoComplete="off"
            />
          </div>
          <div className="form__container">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              aria-label="username"
              aria-required="true"
              onChange={handleChange}
              ref={userRef}
              autoComplete="off"
            />
          </div>
          <div className="form__container">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              aria-label="password"
              aria-required="true"
              onChange={handleChange}
            />
          </div>
          <div className="form__container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Please confirm password"
              aria-label="confirm password"
              aria-required="true"
              onChange={handleChange}
            />
          </div>
          <div className="submit__btn">
            <button>Register</button>
          </div>
        </form>
        <div className="form__type">
          <p className="login__switch">
            Already have an account?
            <span>
              Sign In
              <CgArrowLongRight size={18} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
