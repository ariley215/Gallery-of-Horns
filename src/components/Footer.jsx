/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
  return (
  <Navbar bg='dark' varient='dark'>
    <h2>Andrea Thiel{props.year}</h2>
  </Navbar>
  )
}

export default Footer;