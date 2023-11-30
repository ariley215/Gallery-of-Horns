/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const HornedBeast = ({title, imageUrl, description}) => {
    
  const [favorites, setFavorites] = useState(0);


  function handleClick () {
    setFavorites((prevFavorites) => prevFavorites + 1);
      
    }



  return (
  <div onClick={handleClick}>
    <h3>{title}</h3>
    <img src={imageUrl} alt="A beast with horns" width='250px.' height='200px'></img>
    <p>{description}</p>
    <span><FaHeart />{favorites}</span>
  </div>
  );
};

export default HornedBeast