import L from 'leaflet';
import { Marker } from 'react-leaflet';
import Momos from './recipes/Momos'
import Maultaschen from './recipes/Maultaschen'
import Empanadas from './recipes/Empanadas'
import Gyoza from './recipes/Gyoza'


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
                        return <Momos feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> 
                    case 2:
                        return <Maultaschen feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 3:
                        return <Empanadas feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> 
                    case 4:
                        return <Gyoza feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> 
                    default:
                        return null
                }
            })()}
        </div>
    );
}

