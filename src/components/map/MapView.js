import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const london = [51.505, -0.09]
const melbourne = [ -37.809414 , 144.970177 ]
const canberra = [-35.3180, 149.1448]

const zoom = 13

function DisplayPosition({ map }) {
    const [position, setPosition] = useState(map.getCenter())
  
    const OnClick = loc => useCallback(() => {
      console.log(loc);
      map.setView(loc, zoom)
    }, [map])

    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <div>
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={OnClick(london)}>London</button>
            <button onClick={OnClick(melbourne)}>Melbourne</button>
            <button onClick={OnClick(canberra)}>Canberra</button>
        </p>
      </div>
    )
  }

export function MapView (){
    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
          <MapContainer
            center={melbourne}
            zoom={zoom}
            scrollWheelZoom={false}
            whenCreated={setMap}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        ),
        [],
      )
    
      return (
        <div>
          {map ? <DisplayPosition map={map} /> : null}
          {displayMap}
        </div>
      )
};
