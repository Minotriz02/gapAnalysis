import React from "react";
import { CloseButton } from "react-bootstrap";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "./Map.css";

function Map({
  carouselMajorItems,
  setCarouselMajorItems,
  carouselLandraceItems,
  setCarouselLandraceItems,
}) {
  const handleRemoveFromMajorCarousel = (index) => {
    const itemToRemove = carouselMajorItems.splice(index, 1)[0];
    setCarouselMajorItems([...carouselMajorItems]);
  };

  const handleRemoveFromLandraceCarousel = (index) => {
    const itemToRemove = carouselLandraceItems.splice(index, 1)[0];
    setCarouselLandraceItems([...carouselLandraceItems]);
  };

  return (
    <div className="mapDiv mx-0 p-0">
      <div className="div-filter-map">
        <div className="px-4 py-2">
          {carouselMajorItems && carouselMajorItems.length > 0 && <h6>Major items</h6>}
          {carouselMajorItems &&
            carouselMajorItems.map((item, i) => (
              <div
                className="btn border border-top-0 px-3 py-1 rounded-3 me-1 hoverable filter-map"
                key={i}
                onClick={() => handleRemoveFromMajorCarousel(i)}
              >
                <img
                  alt=""
                  src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                  width="20"
                />{" "}
                {item}
                <CloseButton
                  disabled
                  className="ms-1 close-button"
                ></CloseButton>
              </div>
            ))}
        </div>

        <div className=" px-4 py-2" >
          {carouselLandraceItems && carouselLandraceItems.length > 0 && <h6>Landrace items</h6>}
          {carouselLandraceItems &&
            carouselLandraceItems.map((item, i) => (
              <div
                className="btn border border-top-0 px-3 py-1 rounded-3 me-1 hoverable filter-map"
                key={i}
                onClick={() => handleRemoveFromLandraceCarousel(i)}
              >
                <img
                  alt=""
                  src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                  width="20"
                />{" "}
                {item}
                <CloseButton
                  disabled
                  className="ms-1 close-button"
                ></CloseButton>
              </div>
            ))}
        </div>
      </div>
      <MapContainer
        center={[14.88, -35, 76]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <ZoomControl position="topright"></ZoomControl>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;
