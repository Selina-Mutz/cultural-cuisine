import L, { marker } from 'leaflet';
import { useMap } from 'react-leaflet/hooks';
import { GeoJSON } from 'react-leaflet';
import locations from './../data/recipe_info.json';
import empanadaIcon from '../data/icons/empanada_icon.png';
import siopaoIcon from '../data/icons/siopao_icon.png';
import gyozaIcon from '../data/icons/gyoza_icon.png';
import gsdIcon from '../data/icons/goldensyrupdumpling_icon.png';
import pierogiIcon from '../data/icons/pierogi_icon.png';
import momoIcon from '../data/icons/momo_icon.png';
import gözlemeIcon from '../data/icons/gözleme_icon.png';
import pizzaIcon from '../data/icons/pizzatasche_icon.png';
import sambusaIcon from '../data/icons/sambusa_icon.png';
import maultascheIcon from '../data/icons/maultasche_icon.png';
import mantiIcon from '../data/icons/manti_icon.png';


/**
 * Component displaying the geo-objects representing the recipe info on the map
 * 
 * @param {object} props 
 * @param {React.Dispatch} props.setSelectedFeature Function to set the value of the selectedFeature state to the geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function GeoFeatures({ setSelectedFeature, setFeatureFocus }) {
    const map = useMap();

    /**
     * Determines the icon based on the recipe location or dish type
     * @param {GeoJSON.Feature} feature The geo-object
     * @returns {string} Icon URL
     */
    function getIconForFeature(feature) {
        const markerLocation = feature.properties.marker_location.toLowerCase();
        if (markerLocation.includes('philippinen')) return siopaoIcon;
        if (markerLocation.includes('nepal')) return momoIcon; 
        if (markerLocation.includes('japan')) return gyozaIcon;
        if (markerLocation.includes('australien')) return gsdIcon;
        if (markerLocation.includes('polen')) return pierogiIcon;
        if (markerLocation.includes('argentinien')) return empanadaIcon;
        if (markerLocation.includes('türkei')) return gözlemeIcon;
        if (markerLocation.includes('vereinigte staaten')) return pizzaIcon;
        if (markerLocation.includes('somalien')) return sambusaIcon;
        if (markerLocation.includes('deutschland')) return maultascheIcon;
        if (markerLocation.includes('türkei')) return mantiIcon;

        return empanadaIcon; // Default icon
    }

    /**
     * Function that defines how the point geo-objects should be displayed on the map
     * 
     * @param {GeoJSON.Point} geoJsonPoint The point feature
     * @param {L.LatLng} latLng The latitude and longitude of the point feature
     * @returns {L.Marker}
     */
    function styleMarker(geoJsonPoint, latLng) {
        const iconUrl = getIconForFeature(geoJsonPoint);
        const icon = L.divIcon({
            html: `<img src="${iconUrl}" alt="${geoJsonPoint.properties.text}" style="width:50px; height:50px;"/>`,
            className: 'pin-icon',
            iconAnchor: [0, 30],
            iconSize: [50, 50],
        });
        return L.marker(latLng, { icon: icon });
    }

    /**
     * Attaches a click event listener to each map layer containing a geo-object
     * 
     * @param {GeoJSON.Feature} feature The geo-object
     * @param {L.Layer} layer The Leaflet layer
     */
    function attachEventListener(feature, layer) {
        layer.on('click', (e) => {
            setSelectedFeature(feature);
            setFeatureFocus(true);
            const { lat, lng } = e.target.getLatLng();
            map.flyTo([lat, lng - 0.023], 6);
        });
    }

    return (
        <GeoJSON
            data={locations}
            pointToLayer={styleMarker}
            onEachFeature={attachEventListener} />
    );
}
