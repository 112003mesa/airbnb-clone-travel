"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvent} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SearchResultData } from "@/app/types/app";
import { useEffect, useState } from "react";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
    const [center, setCenter] = useState<[number, number]>([30.0444, 31.2357]); // مركز مصر (القاهرة)
    const [clickPosition, setClickPosition] = useState<[number, number] | null>(null);
    const [filteredHotels, setFilteredHotels] = useState<SearchResultData>([]);

    useEffect(() => {
        if (searchResultData.length > 0) {
            setCenter([searchResultData[0].lat, searchResultData[0].long]);
        }
    }, [searchResultData]);

    useEffect(() => {
        // تصفية الفنادق اللي موجودة في نطاق الـ center
        const filtered = searchResultData.filter((hotel) => {
            return (
                Math.abs(hotel.lat - center[0]) <= 1.5 && Math.abs(hotel.long - center[1]) <= 1.5
            );
        });
        setFilteredHotels(filtered);
    }, [center, searchResultData]);

    if (!center) return <p>Loading map...</p>;

    const MapClickHandler = () => {
        useMapEvent("click", (e) => {
            setClickPosition([e.latlng.lat, e.latlng.lng]);
        });

        return clickPosition ? (
            <Popup position={clickPosition}>
                <div>
                    <strong>إحداثيات الموقع:</strong>
                    <br />
                    {clickPosition[0].toFixed(5)}, {clickPosition[1].toFixed(5)}
                </div>
            </Popup>
        ) : null;
    };

    return (
        <MapContainer
            center={center}
            zoom={7}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
            attributionControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            <MapClickHandler />

            {filteredHotels.map((hotel) => (
                <Marker key={`${hotel.lat}-${hotel.long}`} position={[hotel.lat, hotel.long]}>
                    <Popup>
                        <strong>{hotel.title}</strong>
                        <br />
                        {hotel.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
