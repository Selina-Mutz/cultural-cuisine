import { useState } from 'react';
import { MapContainer, ZoomControl, TileLayer } from 'react-leaflet';
import GeoFeatures from './GeoFeatures';
import FragmentViz from './FragmentViz';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import './css/App.css';
import FeedbackForm from './FeedbackForm';
import FeedbackButton from './FeedbackButton'; 
import "../components/css/Feedback.css";

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
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [featureFocus, setFeatureFocus] = useState(false);

    // Feedback state must be inside the App component
    const [isFeedbackOpen, setFeedbackOpen] = useState(false);

    const esriWorldPhysical = {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
    };

    return (
        <>
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
                <ZoomControl position='bottomright' />
                {featureFocus ? (
                    <FragmentViz
                        selectedFeature={selectedFeature}
                        setFeatureFocus={setFeatureFocus} />
                ) : (
                    <div>
                        <InfoToast />
                        <PlaceList />
                        <GeoFeatures
                            setSelectedFeature={setSelectedFeature}
                            setFeatureFocus={setFeatureFocus} />
                    </div>
                )}
            </MapContainer>

            {/* Feedback Button */}
            <FeedbackButton onClick={() => setFeedbackOpen(true)} />

            {/* Feedback Form */}
            {isFeedbackOpen && (
                <FeedbackForm onClose={() => setFeedbackOpen(false)} />
            )}
        </>
    );
}