import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import CheckFilter from "../checkFilter/CheckFilter";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function FilterLeft({ setCarouselMajorItems, setCarouselLandraceItems }) {
  const majorCrops = [...Array(15)].map((_, i) => `Major Crop ${i}`);
  const landraceCrops = [...Array(30)].map((_, i) => `Landrace Crop ${i}`);

  const [shouldAddToMap, setShouldAddToMap] = useState(false);
  const [carouselMajorItemsNow, setCarouselMajorItemsNow] = useState(null);
  const [carouselLandraceItemsNow, setCarouselLandraceItemsNow] =
    useState(null);
  const [shouldReset, setShouldReset] = useState(false);
  const fileInputRef = useRef(null);

  const handleDataMajorCropChange = (newData) => {
    setCarouselMajorItemsNow(newData);
  };

  const handleDataLandraceCropChange = (newData) => {
    setCarouselLandraceItemsNow(newData);
  };

  const handleAddToMap = () => {
    setShouldReset(!shouldReset);
    setShouldAddToMap(true);
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // acciones con el archivo subido
    console.log(selectedFile);
  };

  if (shouldAddToMap) {
    setCarouselMajorItems(carouselMajorItemsNow);
    setCarouselLandraceItems(carouselLandraceItemsNow);
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
      <CheckFilter
        title="Major Crops"
        onDataChange={handleDataMajorCropChange}
        onChange={shouldReset}
        crop={majorCrops}
      ></CheckFilter>
      {carouselMajorItemsNow && carouselMajorItemsNow.length == 1 && (
        <CheckFilter
          title="Landrace Crops"
          onDataChange={handleDataLandraceCropChange}
          onChange={shouldReset}
          crop={landraceCrops}
        ></CheckFilter>
      )}
      <div className="d-flex flex-column align-items-center gap-2 mt-3">
        <Button
          variant="primary"
          className="w-50 text-white"
          onClick={handleAddToMap}
        >
          Add to map
        </Button>
        <input
          type="file"
          id="file-input"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
          ref={fileInputRef}
        />
        <Button
          variant="primary"
          className="text-white mb-3"
          onClick={() => fileInputRef.current.click()}
        >
          <FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload your gap
          analysis
        </Button>
      </div>
    </Container>
  );
}

export default FilterLeft;
