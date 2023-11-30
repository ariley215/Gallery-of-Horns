import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Container from 'react-bootstrap/Container';
import beastData from "/src/beast-data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
    

function App() {
 
  return (
    <>
      <Header title='Gallery of Horns' />
      <Gallery message= 'Choose Your Favorite' beastData={beastData} />
      <Footer name='Andrea Thiel' />
    </>
  );
}





export default App