import React, { FC } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon.src,
	iconRetinaUrl: markerIcon2x.src,
	shadowUrl: markerShadow.src,
});

interface MapProps {
	center?: number[];
}

const Map: FC<MapProps> = ({ center }) => {
	const defaultCenter: [number, number] = [29.745, -95.375];
	const mapCenter = center ? (center as [number, number]) : defaultCenter;
	const zoomLevel = center ? 4 : 2;

	return (
		<MapContainer
			center={mapCenter}
			zoom={zoomLevel}
			scrollWheelZoom={false}
			className="h-[35vh] rounded-lg"
		>
			<TileLayer
				attribution="Map data © OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={mapCenter} />
		</MapContainer>
	);
};

export default Map;
