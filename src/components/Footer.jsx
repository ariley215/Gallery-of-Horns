/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar'

const Footer = (props) => {
  return (
  <Navbar bg='dark' varient='dark'>
    <h2>Andrea Thiel{props.year}</h2>
  </Navbar>
  )
}

export default Footer;