import React from "react";
import { CloseButton } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";


function Map({ carouselItems, setCarouselItems }) {

    const handleRemoveFromCarousel = (index) => {
        const itemToRemove = carouselItems.splice(index, 1)[0];
        setCarouselItems([...carouselItems]);
    };

    return (
        <div className="mapDiv mx-0 p-0">
            <div className="div-filter-map px-4 py-2">
                {carouselItems && carouselItems.map((item, i) => (
                    <div className="btn border border-top-0 px-3 py-1 rounded-3 me-1 hoverable filter-map" key={i} onClick={() => handleRemoveFromCarousel(i)}>
                        <img
                            alt=""
                            src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                            width="20"
                        />{" "}
                        {item}
                        <CloseButton disabled className="ms-1 close-button"></CloseButton>
                    </div>
                ))}
            </div>

            <MapContainer
                center={[14.88, -35, 76]}
                zoom={3}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer >
        </div>
    );
}

export default Map;