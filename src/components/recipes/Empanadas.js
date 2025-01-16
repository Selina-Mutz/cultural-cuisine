import RecipeBox from '../RecipeBox';
import flagArgentina from '../../data/flags/argentina.png';
import Empanadas1 from '../../data/argentinischeempanadas/Empanadas-1.jpg';
import Empanadas2 from '../../data/argentinischeempanadas/Empanadas-2.jpg';
import Empanadas3 from '../../data/argentinischeempanadas/Empanadas-3.jpg';
import Empanadas4 from '../../data/argentinischeempanadas/Empanadas-4.jpg';
import Empanadas5 from '../../data/argentinischeempanadas/Empanadas-5.jpg';
import Empanadas6 from '../../data/argentinischeempanadas/Empanadas-6.jpg';
import Empanadas7 from '../../data/argentinischeempanadas/Empanadas-7.jpg';
import Empanadas8 from '../../data/argentinischeempanadas/Empanadas-8.jpg';
import Empanadas9 from '../../data/argentinischeempanadas/Empanadas-9.jpg';
import Empanadas10 from '../../data/argentinischeempanadas/Empanadas-10.jpg';
import Empanadas11 from '../../data/argentinischeempanadas/Empanadas-11.jpg';
import Empanadas12 from '../../data/argentinischeempanadas/Empanadas-12.jpg';
import Empanadas13 from '../../data/argentinischeempanadas/Empanadas-13.jpg';
import Empanadas14 from '../../data/argentinischeempanadas/Empanadas-14.jpg';
import Empanadas15 from '../../data/argentinischeempanadas/Empanadas-15.jpg';

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
                images={[Empanadas15, Empanadas1, Empanadas2, Empanadas3, Empanadas4, Empanadas5, Empanadas6, Empanadas7, Empanadas8, Empanadas9, Empanadas10, Empanadas11, Empanadas12, Empanadas13, Empanadas14]}
                flagImages = {[flagArgentina]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}