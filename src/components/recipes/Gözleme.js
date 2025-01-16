import RecipeBox from '../RecipeBox';
import flagTurkey from '../../data/flags/turkey.png';
import Gözleme1 from '../../data/gözleme/Gözleme-1.jpg';
import Gözleme2 from '../../data/gözleme/Gözleme-2.jpg';
import Gözleme3 from '../../data/gözleme/Gözleme-3.jpg';
import Gözleme4 from '../../data/gözleme/Gözleme-4.jpg';
import Gözleme5 from '../../data/gözleme/Gözleme-5.jpg';
import Gözleme6 from '../../data/gözleme/Gözleme-6.jpg';
import Gözleme7 from '../../data/gözleme/Gözleme-7.jpg';
import Gözleme8 from '../../data/gözleme/Gözleme-8.jpg';
import Gözleme9 from '../../data/gözleme/Gözleme-9.jpg';
import Gözleme10 from '../../data/gözleme/Gözleme-10.jpg';
import Gözleme11 from '../../data/gözleme/Gözleme-11.jpg';
import Gözleme12 from '../../data/gözleme/Gözleme-12.jpg';

/**
 * Component displaying the recipe and pictures for Gözleme
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
                images={[Gözleme12, Gözleme1, Gözleme2, Gözleme3, Gözleme4, Gözleme5, Gözleme6, Gözleme7, Gözleme8, Gözleme9, Gözleme10, Gözleme11]}
                flagImages = {[flagTurkey]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}