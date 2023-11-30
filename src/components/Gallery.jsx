/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import HornedBeast from "./HornedBeast"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';


const Gallery = (props) => {
  const { beastData } = props;
  const { updateState } = props;

  function handleClick (imageUrl) {
// Perform modal-related logic here

    updateState('newState', imageUrl);
    
  };

  return (
    <main>
      <Container>
        <h2>{props.message}</h2>

        <Row>

          {beastData.map((beast, index) => (
            <Col  xs={1} md={3}>
              <HornedBeast
                key={index}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                onClick = {() => handleClick (beast.imageUrl)}
              />
            </Col>

          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Gallery