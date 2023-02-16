import FilterLeft from '../../components/filterLeft/FilterLeft';
import Map from '../../components/map/Map';
import './MapTools.css'
import { Col, Row } from 'react-bootstrap'

function MapTools() {
    return (<Row className='m-0'>
        <Col className='col-3 overflow-auto' style={{height:"90vh"}}>
            <FilterLeft></FilterLeft>
        </Col>
        <Col className='mx-0 px-0'>
            <Map></Map>
        </Col>
    </Row>
    )
}

export default MapTools;