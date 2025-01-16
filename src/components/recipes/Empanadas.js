import RecipeBox from '../RecipeBox';
import flagArgentina from '../../data/flags/argentina.png';
import Empanadas-1 from '../../data/argentinischeempanadas/Empanadas-1.jpg';
import Empanadas-2 from '../../data/argentinischeempanadas/Empanadas-2.jpg';
import Empanadas-3 from '../../data/argentinischeempanadas/Empanadas-3.jpg';
import Empanadas-4 from '../../data/argentinischeempanadas/Empanadas-4.jpg';
import Empanadas-5 from '../../data/argentinischeempanadas/Empanadas-5.jpg';
import Empanadas-6 from '../../data/argentinischeempanadas/Empanadas-6.jpg';
import Empanadas-7 from '../../data/argentinischeempanadas/Empanadas-7.jpg';
import Empanadas-8 from '../../data/argentinischeempanadas/Empanadas-8.jpg';
import Empanadas-9 from '../../data/argentinischeempanadas/Empanadas-9.jpg';
import Empanadas-10 from '../../data/argentinischeempanadas/Empanadas-10.jpg';
import Empanadas-11 from '../../data/argentinischeempanadas/Empanadas-11.jpg';
import Empanadas-12 from '../../data/argentinischeempanadas/Empanadas-12.jpg';
import Empanadas-13 from '../../data/argentinischeempanadas/Empanadas-13.jpg';
import Empanadas-14 from '../../data/argentinischeempanadas/Empanadas-14.jpg';
import Empanadas-15 from '../../data/argentinischeempanadas/Empanadas-15.jpg';

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
                titleText={feature.recipe.text.title}
                timeText={feature.recipe.time}
                servings={feature.recipe.servings}
                difficultyText = {feature.recipe.difficulty}
                cultureText = {feature.recipe.text.culture}
                ingredientsArray = {feature.recipe.ingredients}
                preparationTextArray = {feature.recipe.text.preparation}
                tipsTextArray = {feature.recipe.tips}
                setFeatureFocus={setFeatureFocus}
                images={[Empanadas-1, Empanadas-2, Emapandas-3, Empanadas-4, Emapnadas-5, Empanadas-6, Empanadas-7, Empanadas-8, Empanadas-9, Emapandas-10, Empanadas-11, Empanadas-12, Emapandas-13, Emapandas-14, Emapandas-15]}
                flagImages = {[flagArgentina]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}