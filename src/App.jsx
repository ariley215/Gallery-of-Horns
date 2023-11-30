import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Container from 'react-bootstrap/Container';
import beastData from "/src/beast-data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';   
import SelectedBeast from "./components/SelectedBeast";

function App() {
 
  const [state, setState] = useState('initialState');

  function updateState (newState) {
    setState(newState);

  }

 
 
  return (
    <Container>
      <Header title='Gallery of Horns' />
      <Gallery message= 'Choose Your Favorite' beastData={beastData} updateState={updateState} />
      <SelectedBeast />
      <Footer name='Andrea Thiel' />
    </Container>
  );
}





export default App