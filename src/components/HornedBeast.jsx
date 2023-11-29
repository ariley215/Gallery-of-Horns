/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";


const HornedBeast = ({title, imageUrl, description}) => {

  const [favorites, setFavorites] = useState(0);


  function handleClick () {
    setFavorites((prevFavorites) => prevFavorites + 1);
      
    }



  return (
  <div onClick={handleClick}>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title}/>
    <p>{description}</p>
    <span><FaHeart />{favorites}</span>
  </div>
  );
};

export default HornedBeast