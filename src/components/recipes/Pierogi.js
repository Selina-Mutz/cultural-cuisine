import RecipeBox from '../RecipeBox';
import flagPoland from '../../data/flags/poland.png';
import pierogi_fertig2 from '../../data/pierogi/pierogi_fertig2.jpg';
import pierogi_fertig1 from '../../data/pierogi/pierogi_fertig.jpg';
import pierogi1 from '../../data/pierogi/pierogi1.jpg';
import pierogi2 from '../../data/pierogi/pierogi2.jpg';
import pierogi3 from '../../data/pierogi/pierogi3.jpg';


/**
 * Component displaying the recipe and pictures for Pierogi
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Pierogi({ feature, setFeatureFocus }) {

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
                images={[pierogi_fertig2, pierogi_fertig1, pierogi1, pierogi2, pierogi3]}
                flagImages = {[flagPoland]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}