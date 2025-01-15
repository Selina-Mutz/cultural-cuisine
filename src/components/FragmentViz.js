import L from 'leaflet';
import { Marker } from 'react-leaflet';
import Momos from './recipes/Momos'
import Maultaschen from './recipes/Maultaschen'
import Empanadas from './recipes/Empanadas'
import Pizzataschen from './recipes/Pizzataschen'
import Gözleme from './recipes/Gözleme'
import Gyoza from './recipes/Gyoza'
import GoldenSyrupDumplings from './recipes/GoldenSyrupDumplings'
import Pierogi from './recipes/Pierogi'
import Sambusas from './recipes/Sambusas'
import Manti from './recipes/Manti';
import Luqaimat from './recipes/Luqaimat';







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
                        return <Gözleme feature={selectedFeature} setFeatureFocus={setFeatureFocus} /> 
                    case 5:
                        return <Pizzataschen feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 6:
                        return <Gyoza feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 7:
                        return <GoldenSyrupDumplings feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 8:
                        return <Pierogi feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 10:
                        return <Sambusas feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 11:
                        return <Manti feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    case 12:
                        return <Luqaimat feature={selectedFeature} setFeatureFocus={setFeatureFocus} />
                    default:
                        return null
                }
            })()}
        </div>
    );
}

