import { useState } from 'react';
import { MapContainer, ZoomControl, TileLayer } from 'react-leaflet';
import GeoFeatures from './GeoFeatures';
import FragmentViz from './FragmentViz';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import './css/App.css';

/**
 * Coordinates of the initial map center
 */
export const mapCenter = [40.637262, 32.083669];

/**
 * Initial zoom level of the map
 */
export const mapZoom = 4.5;

/**
 * Component displaying the map container and all embedded child elements
 * 
 * @returns {React.JSX.Element}
 */
export default function App() {
    /**
     * State storing the geo-object that was clicked on by the user
     */
    const [selectedFeature, setSelectedFeature] = useState(null);
    /**
     * State storing a boolean value indicating whether a geo-object is currently selected or not, used for conditionally displaying child components
     */
    const [featureFocus, setFeatureFocus] = useState(false);
    /** 
     * Object storing the URL and attribution for the map tiles
     */
    const esriWorldPhysical = {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
    };
/*  more layers at: https://leaflet-extras.github.io/leaflet-providers/preview/
    const stamenWatercolor = {
        url: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg}',
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    };*/


    return (
        <MapContainer
            className='map-container'
            center={mapCenter}
            zoomControl={false}
            zoom={3.5}
            minZoom={2.5}
            maxZoom={8}
            zoomSnap={0.5}
            zoomDelta={0.5}
            maxBounds={[[90, -180], [-90, 180]]}
            maxBoundsViscosity={1.0}>
            <TileLayer
                attribution={esriWorldPhysical.attribution}
                url={esriWorldPhysical.url}
                tileSize={512}
                zoomOffset={-1} />
            <ZoomControl
                position='bottomright' />
            {featureFocus ?
                <FragmentViz
                    selectedFeature={selectedFeature}
                    setFeatureFocus={setFeatureFocus} />
                : null}
            {!featureFocus ?
                <div>
                    <InfoToast />
                    <PlaceList />
                    <GeoFeatures
                        setSelectedFeature={setSelectedFeature}
                        setFeatureFocus={setFeatureFocus} />
                </div>
                : null}
        </MapContainer>
    );
}
