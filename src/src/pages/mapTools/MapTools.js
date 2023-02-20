import FilterLeft from '../../components/filterLeft/FilterLeft';
import Map from '../../components/map/Map';
import './MapTools.css'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';

function MapTools() {

    const [carouselItems, setCarouselItems] = useState(null);

    const handleDataChange = (newData) => {
        setCarouselItems(newData);
    };

    return (<Row className='m-0'>
        <Col className='col-5 col-xxl-3 overflow-auto' style={{ height: "92vh" }}>
            <FilterLeft onDataChange={handleDataChange} carouselItems={carouselItems} setCarouselItems={setCarouselItems}></FilterLeft>
        </Col>
        <Col className='mx-0 px-0'>
            <Map carouselItems={carouselItems} setCarouselItems={setCarouselItems}></Map>
        </Col>
    </Row>
    )
}

export default MapTools;