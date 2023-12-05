/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const HornedBeast = ({ title, imageUrl,}) => {
    
  const [favorites, setFavorites] = useState(0);


  function handleClick () {
    setFavorites((prevFavorites) => prevFavorites + 1);
      
    }



  return (
  <div onClick={handleClick}>
    <h4>{title}</h4>
    <img src={imageUrl} alt="A beast with horns" width='250px.' height='200px'></img>
    <span><FaHeart />{favorites}</span>
  </div>
  );
};

export default HornedBeast