import { Link } from "react-router-dom"
import { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'


const pages = ["womenwear", "menswear", "kids clothing", "technology"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", () => {setIsOpen(false)});

  return (
    <nav className="nav">
      <div className="nav__icons icon">
        {isOpen ? (
          <CgClose color='#fff' onClick={() => setIsOpen(false)} />
        ) : (
          <CgMenuRight onClick={() => setIsOpen(true)} />
        )}
      </div>
      <ul className={isOpen ? "nav__container" : "nav__container nav__hidden"}>
        {pages.map((page, index) => (
          <li className="nav__item" key={index}>
            <Link
              className="nav__link"
              to="/department"
              onClick={() => {
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
