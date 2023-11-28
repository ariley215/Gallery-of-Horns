
const HornedBeast = ({title, imageUrl, description}) => {
  return (
  <div>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title}/>
    <p>{description}</p>
  </div>
  );
};
  


const Gallery = () => {
  return (
  <main>
    <h1>Gallery</h1>
    
    <HornedBeast
    title = "Horned Beast 1"
    imageUrl = ""
    description = ""
    />

    <HornedBeast
    title = "Horned Beast 2"
    imageUrl = ""
    description = ""
    />



  </main> 
  )
}

export default Gallery