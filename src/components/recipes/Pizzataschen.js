import RecipeBox from '../RecipeBox';
import usaFlag from '../../data/flags/usa.png';
import Pizzataschen-1 from '../../data/pizzataschen/Pizzataschen-1.jpg'
import Pizzataschen-2 from '../../data/pizzataschen/Pizzataschen-2.jpg'
import Pizzataschen-3 from '../../data/pizzataschen/Pizzataschen-3.jpg'
import Pizzataschen-4 from '../../data/pizzataschen/Pizzataschen-4.jpg'
import Pizzataschen-5 from '../../data/pizzataschen/Pizzataschen-5.jpg'
import Pizzataschen-6 from '../../data/pizzataschen/Pizzataschen-6.jpg'
import Pizzataschen-7 from '../../data/pizzataschen/Pizzataschen-7.jpg'
import Pizzataschen-8 from '../../data/pizzataschen/Pizzataschen-8.jpg'
import Pizzataschen-9 from '../../data/pizzataschen/Pizzataschen-9.jpg'


/**
 * Component displaying the recipe and pictures for Momos
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Pizzataschen({ feature, setFeatureFocus }) {

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
                images={[Pizzataschen-1, Pizzataschen-2, Pizzataschen-3, Pizzataschen-4, Pizzataschen-5, Pizzataschen-6, Pizzataschen-7, Pizzataschen-8, Pizzataschen-9]}
                flagImages = {[usaFlag]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}