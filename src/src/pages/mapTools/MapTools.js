import FilterLeft from '../../components/filterLeft/FilterLeft';
import Map from '../../components/map/Map';
import './MapTools.css'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import FilterRight from '../../components/filterRight/FilterRight';

function MapTools() {

    const [carouselMajorItems, setCarouselMajorItems] = useState(null);
    const [carouselLandraceItems, setCarouselLandraceItems] = useState(null);


    return (<Row className='m-0'>
        <Col className='col-5 col-xxl-3 col-xl-4 overflow-auto' style={{ height: "92vh" }}>
            <FilterLeft setCarouselMajorItems={setCarouselMajorItems} setCarouselLandraceItems={setCarouselLandraceItems}></FilterLeft>
        </Col>
        <Col className='mx-0 px-0'>
            <Map carouselMajorItems={carouselMajorItems} setCarouselMajorItems={setCarouselMajorItems} carouselLandraceItems={carouselLandraceItems} setCarouselLandraceItems={setCarouselLandraceItems}></Map>
        </Col>
        <Col className='col-auto'>
            <FilterRight></FilterRight>
        </Col>
    </Row>
    )
}

export default MapTools;