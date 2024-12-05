import ContentBox from './../ContentBox';

/**
 * Component displaying the recipe and pictures for Momos
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Momos({ feature, setFeatureFocus }) {

    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                //person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span
                    style={{ color: 'var(--primary)', fontSize: '8pt' }}>
                    Momos Test.<br />
                </span>
            </ContentBox>
        </div>
    );
}