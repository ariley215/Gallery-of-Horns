/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const SelectedBeast = ({ show, onClose, selectedBeast }) => {
  const { title = 'No Title', description = 'No Description' } = selectedBeast || {};

    return(  
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedBeast && <img src={selectedBeast.image_url} alt='selected beast' style={{ maxWidth: '100%', height: 'auto'}} />}
        <p>{description}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </Modal.Footer>


        </Modal>

    )
};






export default SelectedBeast