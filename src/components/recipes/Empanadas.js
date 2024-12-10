import RecipeBox from '../RecipeBox';

/**
 * Component displaying the recipe and pictures for Empanadas
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Empanadas({ feature, setFeatureFocus }) {

    return (
        <div>
            <RecipeBox
                narrativeFragment={feature.properties.text}
                //person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span
                    style={{ color: 'var(--primary)', fontSize: '8pt' }}>
                    Empanadas Test.<br />
                </span>
            </RecipeBox>
        </div>
    );
}