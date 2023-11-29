import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import beastData from "/src/beast-data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
 
  return (
    <Container>
      <Header title='Gallery of Horns' />
      <Gallery message= 'Choose Your Favorite' beastData={beastData} />
      <Footer name='Andrea Thiel' />
    </Container>
  );
}





export default App