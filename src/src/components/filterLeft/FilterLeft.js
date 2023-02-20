import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import CheckFilter from "../checkFilter/CheckFilter";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function FilterLeft({ setCarouselItems }) {

  const [shouldAddToMap, setShouldAddToMap] = useState(false);
  const [carouselItemsNow, setCarouselItemsNow] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);
  const fileInputRef = useRef(null);


  const handleDataCropChange = (newData) => {
    setCarouselItemsNow(newData);
  };

  const handleAddToMap = () => {
    setShouldReset(!shouldReset)
    setShouldAddToMap(true);
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // acciones con el archivo subido
  };


  if (shouldAddToMap) {
    setCarouselItems(carouselItemsNow);
    setShouldAddToMap(false);
  }


  return (
    <Container className="mt-3">
      <Row className="align-items-center mb-3">
        <Col className="col-3">Country</Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Select a country</option>
            <option value="1">Colombia</option>
            <option value="2">Colombia</option>
            <option value="3">Colombia</option>
          </Form.Select>
        </Col>
      </Row>
      <CheckFilter title="Major Crops" onDataChange={handleDataCropChange} onChange={shouldReset}></CheckFilter>
      <CheckFilter title="Landrace Crops"></CheckFilter>
      <div className="d-flex flex-column align-items-center gap-2 mt-3">
        <Button variant="primary" className="w-50 text-white" onClick={handleAddToMap}>Add to map</Button>
        <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileInputChange} ref={fileInputRef} />
        <Button variant="primary" className="text-white mb-3" onClick={() => fileInputRef.current.click()}><FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload your gap analysis</Button>
      </div>
    </Container>
  );
}

export default FilterLeft;
