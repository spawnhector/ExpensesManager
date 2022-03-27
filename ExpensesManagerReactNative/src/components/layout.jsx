import { Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Link,
  Outlet,
} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-expense"} className="nav-link">
              Expense manager
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-expense"} className="nav-link">
                  Create Expense
                </Link>
                <Link to={"/expenses-listing"} className="nav-link">
                  Expenses List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>
        <Outlet/>
    </>
  )
};

export default Layout;