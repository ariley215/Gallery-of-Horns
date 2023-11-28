import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import beastData from "/src/beast-data.json"

const App = () => {
 
  return (
    <>
    <Header title='Gallery of Horns' />
    <Gallery beastData={beastData} />
    <Footer name='Andrea Thiel' />
    </>
  );
}





export default App