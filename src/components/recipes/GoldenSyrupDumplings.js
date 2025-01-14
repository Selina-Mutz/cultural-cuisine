import RecipeBox from '../RecipeBox';
import gsdFertig from '../../data/goldensyrupdumplings/gsd-7.jpg';
import gsdZutaten from '../../data/goldensyrupdumplings/gsd-zutaten.jpg';
import gsd1 from '../../data/goldensyrupdumplings/gsd-3.jpg';
import gsd2 from '../../data/goldensyrupdumplings/gsd-4.jpg';
import gsd3 from '../../data/goldensyrupdumplings/gsd-6.jpg';
import flagAustralia from '../../data/flags/australia.png';

/**
 * Component displaying the recipe and pictures for Golden Syrup Dumplings
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Gyoza({ feature, setFeatureFocus }) {

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
                images={[gsdFertig, gsdZutaten, gsd1, gsd2, gsd3]}
                flagImages = {[flagAustralia]}>
            </RecipeBox>
        </div>
    );
}