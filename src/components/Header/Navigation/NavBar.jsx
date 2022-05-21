import { Link } from "react-router-dom"
import { departments } from "../../../redux/reducers/items"
import { useDispatch } from "react-redux"
import { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'


const pages = ["women's clothing", "men's clothing", "jewelery", "electronics"]

const NavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", () => {setIsOpen(false)});

  return (
    <nav className="nav">
      <div className="nav__icons">
        {isOpen ? (
          <CgClose color='#fff' size={30} onClick={() => setIsOpen(false)} />
        ) : (
          <CgMenuRight size={30} onClick={() => setIsOpen(true)} />
        )}
      </div>
      <ul className={isOpen ? "nav__container" : "nav__container nav__hidden"}>
        {pages.map((page, index) => (
          <li className="nav__item" key={index}>
            <Link
              className="nav__link"
              to="/department"
              onClick={() => {
                dispatch(departments(page));
                setIsOpen(false);
              }}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
