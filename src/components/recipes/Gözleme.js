import RecipeBox from '../RecipeBox';
import flagTurkey from '../../data/flags/turkey.png';
import Gözleme-1 from '../../data/gözleme/Gözleme-1.jpg';
import Gözleme-2 from '../../data/gözleme/Gözleme-2.jpg';
import Gözleme-3 from '../../data/gözleme/Gözleme-3.jpg';
import Gözleme-4 from '../../data/gözleme/Gözleme-4.jpg';
import Gözleme-5 from '../../data/gözleme/Gözleme-5.jpg';
import Gözleme-6 from '../../data/gözleme/Gözleme-6.jpg';
import Gözleme-7 from '../../data/gözleme/Gözleme-7.jpg';
import Gözleme-8 from '../../data/gözleme/Gözleme-8.jpg';
import Gözleme-9 from '../../data/gözleme/Gözleme-9.jpg';
import Gözleme-10 from '../../data/gözleme/Gözleme-10.jpg';
import Gözleme-11 from '../../data/gözleme/Gözleme-11.jpg';
import Gözleme-12 from '../../data/gözleme/Gözleme-12.jpg';

/**
 * Component displaying the recipe and pictures for Tortellini
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Gözleme({ feature, setFeatureFocus }) {

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
                images={[Gözleme-1, Gözleme-2, Gözleme-3, Gözleme-4, Gözleme-5, Gözleme-6, Gözleme-7, Gözleme-8, Gözleme-9, Gözleme-10, Gözleme-11, Gözleme-12]}
                flagImages = {[flagTurkey]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}