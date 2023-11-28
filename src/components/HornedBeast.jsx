/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";


const HornedBeast = ({title, imageUrl, description}) => {

  const [like, setLike]  = useState(false);

  function handleClick () {
    if (like === 'Like') {
      setLike();
      } else  {
        setLike(FaHeart);
    }

    return 
  }


  return (
  <div onClick={handleClick}>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title}/>
    <p>{description}</p>
    <h3>{like}</h3>
  </div>
  );
};

export default HornedBeast