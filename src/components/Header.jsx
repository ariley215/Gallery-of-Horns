/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar'

const Header = (props) => {
  return (
  <Navbar bg='dark' varient='dark'>
    <h1>{props.title}</h1>
  </Navbar>
  )
}

export default Header