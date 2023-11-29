/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast"
import App from "../App";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Gallery = (props) => {
  const { beastData } = props;

  const beast1 = beastData[0];
  const beast2 = beastData[1];
  const beast3 = beastData[2];
  const beast4 = beastData[3];
  const beast5 = beastData[4];
  const beast6 = beastData[5];
  const beast7 = beastData[6];
  const beast8 = beastData[7];
  const beast9 = beastData[8];
  const beast10 = beastData[9];
  const beast11 = beastData[10];
  const beast12 = beastData[11];
  const beast13 = beastData[12];
  const beast14 = beastData[13];
  const beast15 = beastData[14];
  const beast16 = beastData[15];
  const beast17 = beastData[16];
  const beast18 = beastData[17];
  const beast19 = beastData[18];
  const beast20 = beastData[19];


  return (
  <main>
    <Container>
      <h1>Gallery</h1>
      <h2>{props.message}</h2>
      <Row>
        <Col>

          <HornedBeast
            title={beast1.title}
            imageUrl={beast1.image_url}
            description={beast1.description}
          />
        </Col>
        <Col> <HornedBeast
          title={beast2.title}
          imageUrl={beast2.image_url}
          description={beast2.description}
        /></Col>
        <Col>  <HornedBeast
          title={beast3.title}
          imageUrl={beast3.image_url}
          description={beast3.description}
        /></Col>
        <Col>   <HornedBeast
          title={beast4.title}
          imageUrl={beast4.image_url}
          description={beast4.description}
        />
        </Col>
      </Row>

      <Row>
        <Col> <HornedBeast
          title={beast5.title}
          imageUrl={beast5.image_url}
          description={beast5.description}
        />
        </Col>
        <Col>
          <HornedBeast
            title={beast6.title}
            imageUrl={beast6.image_url}
            description={beast6.description}
          /></Col>
        <Col>
          <HornedBeast
            title={beast7.title}
            imageUrl={beast7.image_url}
            description={beast7.description}
          /></Col>
        < Col>
          <HornedBeast
            title={beast8.title}
            imageUrl={beast8.image_url}
            description={beast8.description}
          /></Col></Row>

      <Row>
        <Col>
          <HornedBeast
            title={beast9.title}
            imageUrl={beast9.image_url}
            description={beast9.description}
          /></Col>
        <Col> <HornedBeast
          title={beast10.title}
          imageUrl={beast10.image_url}
          description={beast10.description}
        /></Col>
        <Col>
          <HornedBeast
            title={beast11.title}
            imageUrl={beast11.image_url}
            description={beast11.description}
          /></Col>
        <Col>  <HornedBeast
          title={beast12.title}
          imageUrl={beast12.image_url}
          description={beast12.description}
        />

        </Col></Row>


      <Row>
        <Col>    <HornedBeast
          title={beast13.title}
          imageUrl={beast13.image_url}
          description={beast13.description}
        /></Col>
        <Col>
          <HornedBeast
            title={beast14.title}
            imageUrl={beast14.image_url}
            description={beast14.description}
          /></Col>
        <Col>
          <HornedBeast
            title={beast15.title}
            imageUrl={beast15.image_url}
            description={beast15.description}
          /></Col>
        <Col> <HornedBeast
          title={beast16.title}
          imageUrl={beast16.image_url}
          description={beast16.description}
        /></Col></Row>


      <Row>
        <Col>
          <HornedBeast
            title={beast17.title}
            imageUrl={beast17.image_url}
            description={beast17.description}
          /></Col>
        <Col>   <HornedBeast
          title={beast18.title}
          imageUrl={beast18.image_url}
          description={beast18.description}
        /></Col>
        <Col>
          <HornedBeast
            title={beast19.title}
            imageUrl={beast19.image_url}
            description={beast19.description}
          /></Col>
        <Col>
          <HornedBeast
            title={beast20.title}
            imageUrl={beast20.image_url}
            description={beast20.description}
          /></Col></Row>


    </Container>
  </main> 
  )
}

export default Gallery