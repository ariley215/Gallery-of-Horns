/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';

function HornsSelectorForm(props) {

  const handleChange = (event) => {
    const selection = event.target.value;
    props.onSelect(selection);
  }
  return (
    <Form.Select onChange={handleChange} aria-label="Default select example">
      <option value="All">All</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default HornsSelectorForm;