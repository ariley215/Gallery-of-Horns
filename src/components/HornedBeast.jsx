/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa";


const HornedBeast = ({title, imageUrl, description}) => {

  const [like, setLike]  = useState(FaHeart);

  function handleClick () {
    if (like === 'Like') {
      setLike('Dislike');
      } else  {
        setLike('Like');
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