import L from 'leaflet';
import { Marker } from 'react-leaflet';
import A1 from './fragments/A1';
import A2 from './fragments/A2';
import A3 from './fragments/A3';
import A4 from './fragments/A4';
import D1 from './fragments/D1';
import D2 from './fragments/D2';
import D3 from './fragments/D3';
import D5 from './fragments/D5';
import D6 from './fragments/D6';
import H1 from './fragments/H1';
import H3 from './fragments/H3';
import H4 from './fragments/H4';
import H5 from './fragments/H5';
import D7 from './fragments/D7';
import Momos from './recipes/Momos'

/**
 * Component displaying the narrative fragment, media, and visualizations of the selected geo-object
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.selectedFeature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function FragmentViz({ selectedFeature, setFeatureFocus }) {
    
    /**
     * Coordinates of the geo-object
     */
    const coordinates = selectedFeature.geometry.coordinates;

    /**
     * Icon of the marker shown on the map when a geo-object is selected
     */
    const icon = L.divIcon({
        html: `<i class="bi bi-chat-left-dots-fill" style="font-size:1.6rem"/>`,
        className: 'story-icon',
        iconAnchor: [0, 30]
    });

    return (
        <div>
            <Marker
                position={[coordinates[1], coordinates[0]]}
                icon={icon}
                interactive={false} />
            {(() => {
                switch (selectedFeature.id) {
                    case 1:
                        return <Momos feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> /*
                    case 2:
                        return <Maultaschen feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 3:
                        return <Empanadas feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> */
                    default:
                        return null
                }
            })()}
        </div>
    );
}

