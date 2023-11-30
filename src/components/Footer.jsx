/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


const Footer = (props) => {
  return (
  <Navbar bg='dark' variant='dark'>
    <h2>Andrea Thiel{props.year}</h2>
  </Navbar>
  )
}

export default Footer;