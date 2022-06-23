import { useState, useEffect, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FcHighPriority } from 'react-icons/fc'
import { inputValidation } from "../validation/formValidate";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../api'

const initialState = {
  forename: "",
  surname: "",
  username: "",
  password: "",
  confirmPassword: ""
};

const Register = () => {
  const [register, setRegisterUser] = useState(initialState)
  // eslint-disable-next-line no-unused-vars
  const [inputFocus, setInputFocus] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState({})
  const userRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    userRef.current.focus()
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...register, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setError(inputValidation(register))
    setIsSubmitted(true)
  };

  useEffect(() => {
    if(Object.keys(error).length === 0 && isSubmitted) {
      sendData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isSubmitted])
  

  const sendData = async () => {
    const { forename, surname, username, password} = register

    try {
      const response = await axios.post(
        "/auth/register",
        { forename, surname, username, password },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
     console.log(error.message)
    }
  }

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
              className={error?.forename ? "form__input--error" : "form__input"}
              value={register.forename}
              onChange={handleChange}
              ref={userRef}
              autoComplete="off"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
            <div className="form__error">
              {error?.forename && (
                <>
                  <FcHighPriority size={16} />
                  <p>{error.forename}</p>
                </>
              )}
            </div>
          </div>
          <div className="form__container">
            <label htmlFor="surname">Last Name</label>
            <input
              name="surname"
              type="text"
              placeholder="Enter your surname"
              aria-label="surname name"
              aria-required="true"
              className={error?.surname ? "form__input--error" : "form__input"}
              value={register.surname}
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="form__error">
              {error?.surname && (
                <>
                  <FcHighPriority size={16} />
                  <p>{error.surname}</p>
                </>
              )}
            </div>
          </div>
          <div className="form__container">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              aria-label="username"
              aria-required="true"
              className={error?.username ? "form__input--error" : "form__input"}
              value={register.username}
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
              value={register.password}
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
          <div className="form__container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Please confirm password"
              aria-label="confirm password"
              aria-required="true"
              className={
                error?.confirmPassword ? "form__input--error" : "form__input"
              }
              value={register.confirmPassword}
              onChange={handleChange}
            />
            <div className="form__error">
              {error?.confirmPassword && (
                <>
                  <FcHighPriority size={16} />
                  <p>{error.confirmPassword}</p>
                </>
              )}
            </div>
          </div>
          <div className="submit__btn">
            <button>Register</button>
          </div>
        </form>
        <div className="form__type">
          <p className="login__switch">
            Already have an account?
            <span>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Sign In
              <CgArrowLongRight size={18} />
            </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
