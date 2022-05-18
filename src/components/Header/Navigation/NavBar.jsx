import { Link } from "react-router-dom";
import { departments } from "../../../redux/reducers/items";
import { useDispatch } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";


const pages = ["women's clothing", "men's clothing", "jewelery", "electronics"];

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link
                as={Link}
                to="/department"
                onClick={() => dispatch(departments(page))}
                style={{ color: "white" }}
              >
                {page}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
