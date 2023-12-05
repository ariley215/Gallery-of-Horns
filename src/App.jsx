import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Container from 'react-bootstrap/Container';
import beastData from "/src/beast-data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SelectedBeast from "./components/SelectedBeast";
import HornsSelectorForm from "./components/HornsSelectorForm";
// import BeastList from "./components/BeastList";
// import HornsFilter from "./components/HornsFilter";


function App() {


  const [beasts, setBeasts] = useState(beastData);
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  
  function handleSelect(choice) {

    if (choice === 'All') {
      setBeasts(beastData);
    } else {
      const filteredBeasts = beastData.filter(beast => beast.horns === parseInt(choice));
      setBeasts(filteredBeasts);
      console.log('handling selection')
      console.log('choice', choice)
      console.log(filteredBeasts)
    }

  }
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
      {beasts.length > 0 && <HornsSelectorForm onSelect={handleSelect} />}
      <Gallery
        updateSelectedBeast={updateSelectedBeast}
        message='Choose Your Favorite'
        beastData={beasts}
        // filteredBeasts={filteredBeasts} 
        />
      <SelectedBeast show={showDescription} onClose={closeHandler} selectedBeast={selectedBeast} />
      {/* <BeastList beasts={beasts} />      */}
      <Footer name='Andrea Thiel' />
    </Container>
  );
}





export default App