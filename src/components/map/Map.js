import React, { useEffect, useState, useRef } from 'react';
import reactDom from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>

export function MapView (){
    return (
        <React.Fragment> 
        <h1>Hello mortal</h1>,
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. 
                    <br /> 
                    Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </React.Fragment>
    ); 
};
