import RecipeBox from '../RecipeBox';
import siopao1 from '../../data//siopao-1.jpg';
import siopao2 from '../../data/siopao/siopao2.jpg';
import siopao3 from '../../data/siopao/siopao3.jpg';
import siopao4 from '../../data/siopao/siopao4.jpg';
import siopao5 from '../../data/siopao/siopao5.jpg';
import siopao6 from '../../data/siopao/siopao6.jpg';
import siopao7 from '../../data/siopao/siopao7.jpg';
import siopao8 from '../../data/siopao/siopao8.jpg';
import siopao9 from '../../data/siopao/siopao9.jpg';
import siopao10 from '../../data/siopao/siopao10.jpg';
import siopao11 from '../../data/siopao/siopao11.jpg';


/**
 * Component displaying the recipe and pictures for Siopao
 * 
 * @param {object} props 
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function Siopao({ feature, setFeatureFocus }) {

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
                images={[siopao1, siopao2, siopao3, siopao4, siopao5, siopao6, siopao7, siopao8, siopao9, siopao10, siopao11]}>
            </RecipeBox>
        </div>
    );
}