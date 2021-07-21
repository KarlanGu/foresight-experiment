import { MapView } from './MapView';
import MapSideBar from './MapPOISelection';

const Map= () => <MapView/> 
const MapPage = () => (
    //<MapView />
    <MapSideBar>
        <Map/>
    </MapSideBar>
);

export default MapPage;