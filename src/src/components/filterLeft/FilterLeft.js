import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import CheckFilter from "../checkFilter/CheckFilter";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function FilterLeft() {
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
      <CheckFilter title="Major Crops"></CheckFilter>
      <CheckFilter title="Landrace Crops"></CheckFilter>
      <div className="d-flex flex-column align-items-center gap-2 mt-3">
        <Button variant="primary" className="w-50 text-white">Add to map</Button>
        <Button variant="primary" className="text-white mb-3"><FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload your gap analysis</Button>
      </div>
    </Container>
  );
}

export default FilterLeft;
