/* eslint-disable react/prop-types */
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

const Header = (props) => {
  return (
    <Container>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand><h1>{props.title}</h1></Navbar.Brand>
    </Navbar>
    </Container>
  )
}

export default Header