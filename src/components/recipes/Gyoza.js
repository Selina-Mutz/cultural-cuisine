import RecipeBox from '../RecipeBox';
import gyozaFertig from '../../data/gyoza/gyoza-11.jpeg';
import gyozaZutaten from '../../data/gyoza/gyoza-zutaten.jpeg';
import gyoza1 from '../../data/gyoza/gyoza-4.jpeg';
import gyoza2 from '../../data/gyoza/gyoza-6.jpeg';
import gyoza3 from '../../data/gyoza/gyoza-7.jpeg';
import gyoza4 from '../../data/gyoza/gyoza-8.jpeg';
import gyoza5 from '../../data/gyoza/gyoza-9.jpeg';

/**
 * Component displaying the recipe and pictures for Gyoza
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
                images={[gyozaFertig, gyozaZutaten, gyoza1, gyoza2, gyoza3, gyoza4, gyoza5]}>
            </RecipeBox>
        </div>
    );
}