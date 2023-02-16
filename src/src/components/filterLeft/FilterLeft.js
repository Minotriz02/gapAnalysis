import { Row, Form, Container, Col } from "react-bootstrap";
import CheckFilter from "../checkFilter/CheckFilter";


function FilterLeft() {
    return (<Container className="py-3">
        <Row className="align-items-center">
            <Col className="col-3">
                Country
            </Col>
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
    </Container>)
}

export default FilterLeft;