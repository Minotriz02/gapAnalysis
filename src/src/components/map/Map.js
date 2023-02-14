import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";


function Map() {

    return (
        <div className="mapDiv">
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