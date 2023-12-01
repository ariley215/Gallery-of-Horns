import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Container from 'react-bootstrap/Container';
import beastData from "/src/beast-data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';   
import SelectedBeast from "./components/SelectedBeast";
import HornsForm from "./components/HornsForm";


function App() {
 
   // Added state to keep track of the selected beast and whether the modal is visible
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  

  function updateSelectedBeast(beast) {
    // console.log('Before state update:', { showDescription, selectedBeast });
    setSelectedBeast(beast);
    setShowDescription(true);
  }

  function closeHandler() {
    setShowDescription(false);
  }
 
 
  return (
    <Container>
      <Header title='Gallery of Horns' />
      <Gallery updateSelectedBeast={updateSelectedBeast} message= 'Choose Your Favorite' beastData={beastData} />
      <SelectedBeast show={showDescription} onClose={closeHandler} selectedBeast={selectedBeast} />
      <HornsForm />
      <Footer name='Andrea Thiel' />
    </Container>
  );
}





export default App