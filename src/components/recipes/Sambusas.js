import RecipeBox from '../RecipeBox'
import sambusasFertig from'../../data/sambusas/sambusasfertig.jpg';
import sambusasZutaten from'../../data/sambusas/sambusaszutaten.jpg';
import sambusasFladen from'../../data/sambusas/sambusasfladen.jpg';
import sambusasViertel from'../../data/sambusas/sambusasviertel.jpg';
import sambusasFüllung from'../../data/sambusas/sambusasfüllung.jpg';
import sambusasTüte from'../../data/sambusas/sambusastüte.jpg';
import sambusasFrittiert from'../../data/sambusas/sambusasfrittiert.jpg';
import sambusasDip from'../../data/sambusas/sambusasdip.jpg';







import flagSomalia from '../../data/flags/somalia.png';



/**
 * Component displaying the recipe and pictures for Momos
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Sambusas({ feature, setFeatureFocus }) {

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
                images={[sambusasFertig,sambusasZutaten,sambusasFladen,sambusasViertel,sambusasFüllung,sambusasTüte,sambusasFrittiert,sambusasDip]}
                flagImages = {[flagSomalia]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}