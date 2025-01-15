import RecipeBox from '../RecipeBox'
import mantiFertig from '../../data/manti/manti_fertig.jpg'
import mantiZutaten from '../../data/manti/manti_zutaten.jpg'
import manti1 from '../../data/manti/manti1.jpg'
import manti2 from '../../data/manti/manti2.jpg'
import manti3 from '../../data/manti/manti3.jpg'
import manti4 from '../../data/manti/manti4.jpg'
import manti5 from '../../data/manti/manti5.jpg'
import manti6 from '../../data/manti/manti6.jpg'
import flagTurkey from '../../data/flags/turkey.png'



/**
 * Component displaying the recipe and pictures for Momos
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Manti({ feature, setFeatureFocus }) {

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
                images={[mantiFertig, mantiZutaten, manti1, manti2, manti3, manti4, manti5, manti6]}
                flagImages = {[flagTurkey]}
                metricsArray = {feature.recipe.metrics}>
            </RecipeBox>
        </div>
    );
}