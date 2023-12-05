/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import HornedBeast from "./HornedBeast"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const Gallery = (props) => {
  const { beastData } = props;
  const { updateSelectedBeast } = props;
  // const { filteredBeasts } = props;
  console.log(beastData)
  function handleClick (beast) {
    console.log('handling click')
    updateSelectedBeast(beast);


    
    
  }

  return (
    <main>
      <Container>
        <h2>{props.message}</h2>

        <Row>

          {beastData.map((beast, index) => (
            <Col xs={1} md={3} key={index} onClick = {() => handleClick (beast)}>
              <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            </Col>

          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Gallery