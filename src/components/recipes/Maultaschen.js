import RecipeBox from '../RecipeBox';
import maultaschenFertigQuer from '../../data/maultaschen/maultaschenfertigquer.jpg';
import maultaschenZutaten from '../../data/maultaschen/maultaschenzutaten.jpg';
import maultaschenTeig from '../../data/maultaschen/maultaschenteig.jpg';
import maultaschenFüllung from '../../data/maultaschen/maultaschenfüllung.jpg';
import maultaschenBahn from '../../data/maultaschen/maultaschenbahn.jpg';
import maultaschenBahnHalbZu from '../../data/maultaschen/maultaschenbahnhalbzu.jpg';
import maultaschenBahnZu from '../../data/maultaschen/maultaschenbahnzu.jpg';
import maultaschenKochend from '../../data/maultaschen/maultaschenkochend.jpg';




/**
 * Component displaying the recipe and pictures for Maultaschen
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
                images={[maultaschenFertigQuer, maultaschenZutaten, maultaschenTeig, maultaschenFüllung, maultaschenBahn, maultaschenBahnHalbZu, maultaschenBahnZu, maultaschenKochend]}>
            </RecipeBox>
        </div>
    );
}