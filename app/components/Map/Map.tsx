import { useEffect, useState } from "react";
import type { LatLngExpression } from "leaflet";

export default function Map() {
  const [MapComponents, setMapComponents] = useState<typeof import("react-leaflet") | null>(null);

  useEffect(() => {
    import("react-leaflet").then((mod) => {
      setMapComponents(mod);
    });
  }, []);

  if (!MapComponents) {
    return (
      <div className="h-125 w-full bg-gray-100 flex items-center justify-center font-sans text-gray-500">
        Karte wird geladen...
      </div>
    );
  }
  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  const position: LatLngExpression = [51.505, -0.09];

  return (
    <div id="map" className="h-(--map-height) w-full z-0">
      <MapContainer
        center={position}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span className="font-semibold text-sm">Gesuchte IP-Adresse</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}