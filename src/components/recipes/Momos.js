import RecipeBox from '../RecipeBox';

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
            <RecipeBox
                titleText={feature.recipe.text.title}
                timeText={feature.recipe.time}
                difficultyText = {feature.recipe.difficulty}
                cultureText = {feature.recipe.text.culture}
                preparationTextArray = {feature.recipe.text.preparation}
                setFeatureFocus={setFeatureFocus}>
            </RecipeBox>
        </div>
    );
}