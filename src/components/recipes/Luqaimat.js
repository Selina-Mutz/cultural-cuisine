import RecipeBox from '../RecipeBox'
import flagOman from '../../data/flags/oman.png';
import luqaimatFertig from '../../data/luqaimat/luqaimat_fertig.jpg';


/**
 * Component displaying the recipe and pictures for Luqaimat
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Luqaimat({ feature, setFeatureFocus }) {

    return (
        <div>
            <RecipeBox
                titleText={feature.recipe.text.title}
                timeText={feature.recipe.time}
                servings={feature.recipe.servings}
                difficultyText = {feature.recipe.difficulty}
                cultureText = {feature.recipe.text.culture}
                ingredientsArray = {feature.recipe.ingredients}
                preparationTextArray = {feature.recipe.text.preparation}
                tipsTextArray = {feature.recipe.tips}
                setFeatureFocus={setFeatureFocus}
                images={[luqaimatFertig]}
                flagImages = {[flagOman]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}