import { useEffect, useState } from 'react';
import React from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Button, Card, Icon } from 'react-bootstrap';
import { mapCenter, mapZoom } from './App';
import './css/RecipeBox.css';
import ImageCarousel from './ImageCarousel';

/**
 * Component displaying a box containing a narrative fragment, the related media, any embedded child elements and the narrating character's bio
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children Embedded children
 * @param {string} props.narrativeFragment The narrative fragment to be displayed
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function RecipeBox({ children, titleText, servings, timeText, difficultyText, cultureText, ingredientsArray, preparationTextArray, tipsTextArray, setFeatureFocus, images }) {
    
    /**
     * The Leaflet map object
     */
    const map = useMap();

    const [clickedCooked, setClickedCooked] = useState(false);

    const [clickedLike, setClickedLike] = useState(false);

    const handleLikeClick = () => {
        setClickedLike(!clickedLike);
      };

      const handleCookedClick = () => {
        setClickedCooked(!clickedCooked);
      };

    /**
     * Function that deselects the geo-object and sets the map view back to its initial state when the user clicks the close button of the content box
     */
    function handleClose() {
        setFeatureFocus(false);
        map.setView(mapCenter, mapZoom);
    }

    /** 
     * Sets the value of the character bio when the content box is opened
     * */
    useEffect(() => {});

    return (
        <Card
            id='recipe-box'>
            <Button
                variant='light'
                id='close-recipe-box'
                title='schließen'
                onClick={handleClose}>
                x
            </Button>
            <Card.Body
                id='card-body'>
                <div
                    id="title-recipe-box-div">
                    <Card.Title
                        id="title-recipe-box">
                        {titleText}
                    </Card.Title>
                </div>
                <div
                    id="properties-recipe-box-div">
                    <Card.Text
                        className="properties-recipe-box-element">
                        {timeText}
                    </Card.Text>
                    <Card.Text
                        className="properties-recipe-box-element">
                        Schwierigkeit: {difficultyText}
                    </Card.Text>
                    {clickedLike&&(
                    <button 
                        type="button" 
                        class="btn btn-primary clicked-button"
                        onClick={handleLikeClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                        </svg>
                        Gefällt mir!
                    </button>
                    )}
                    {!clickedLike&&(
                    <button 
                        type="button" 
                        class="btn btn-primary unclicked-button"
                        onClick={handleLikeClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                        </svg>
                        Gefällt mir
                    </button>
                    )}
                    {clickedCooked&&(
                    <button 
                        type="button" 
                        class="btn btn-primary clicked-button"
                        onClick={handleCookedClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                        </svg>
                        Gekocht!
                    </button>
                    )}
                    {!clickedCooked&&(
                    <button 
                        type="button" 
                        class="btn btn-primary unclicked-button"
                        onClick={handleCookedClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path>
                        </svg>
                        Gekocht
                    </button>
                    )}
                </div>
                <div
                    className="subsection-recipe-box-div">
                    <Card.Text
                        className="subsection-title-recipe-box">
                        Kulturelle Bedeutung der {titleText}:
                    </Card.Text>
                    <Card.Text
                        className="subsection-text-recipe-box">
                        {cultureText}<br />
                        <br />
                    </Card.Text>
                </div>
                <div
                    className="subsection-recipe-box-div">
                    <ImageCarousel images={images} />
                </div>
                <div
                    className="subsection-recipe-box-div">
                    <Card.Text
                        className="subsection-title-recipe-box">
                        Zutaten für {servings} Personen:
                    </Card.Text>
                    <div
                        id="ingredient-recipe-box-div"
                        className="subsection-text-recipe-box">
                            {ingredientsArray[0] && (
                            <div
                                className="ingredient-type-recipe-box-div">
                                    <Card.Text
                                        className="ingredient-type-recipe-box-header">
                                    {ingredientsArray[0].name}
                                    </Card.Text>
                                    {ingredientsArray[0].ingredients.map((step, index) => (
                                        <React.Fragment key={index}>
                                            {step.quantity} {step.name}<br />
                                        </React.Fragment>
                                    ))}
                            </div>
                            )}
                            {ingredientsArray[1] && (
                            <div
                                className="ingredient-type-recipe-box-div">
                                    <Card.Text
                                        className="ingredient-type-recipe-box-header">
                                    {ingredientsArray[1].name}
                                    </Card.Text>
                                    {ingredientsArray[1].ingredients.map((step, index) => (
                                        <React.Fragment key={index}>
                                            {step.quantity} {step.name}<br />
                                        </React.Fragment>
                                    ))}
                            </div>
                            )}
                            {ingredientsArray[2] && (
                            <div
                                className="ingredient-type-recipe-box-div">
                                    <Card.Text
                                        className="ingredient-type-recipe-box-header">
                                    {ingredientsArray[2].name}
                                    </Card.Text>
                                    {ingredientsArray[2].ingredients.map((step, index) => (
                                        <React.Fragment key={index}>
                                            {step.quantity} {step.name}<br />
                                        </React.Fragment>
                                    ))}
                            </div>
                            )}
                            {ingredientsArray[3] && (
                            <div
                                className="ingredient-type-recipe-box-div">
                                    <Card.Text
                                        className="ingredient-type-recipe-box-header">
                                    {ingredientsArray[3].name}
                                    </Card.Text>
                                    {ingredientsArray[3].ingredients.map((step, index) => (
                                        <React.Fragment key={index}>
                                            {step.quantity} {step.name}<br />
                                        </React.Fragment>
                                    ))}
                            </div>
                            )}
                    </div>
                </div>
                <div
                    className="subsection-recipe-box-div">
                    <Card.Text
                        className="subsection-title-recipe-box">
                        Zubereitung:
                    </Card.Text>
                    <Card.Text
                        className="subsection-text-recipe-box">
                            {preparationTextArray.map((step, index) => (
                                <React.Fragment key={index}>
                                    {step}<br />
                                    <br />
                                </React.Fragment>
                            ))}
                    </Card.Text>
                </div>
                <div
                    className="subsection-recipe-box-div">
                    <Card.Text
                        className="subsection-title-recipe-box">
                        Tipps für die Zubereitung:
                    </Card.Text>
                    <Card.Text
                        className="subsection-text-recipe-box">
                            {tipsTextArray.map((step, index) => (
                                <React.Fragment key={index}>
                                    {step}<br />
                                    <br />
                                </React.Fragment>
                            ))}
                    </Card.Text>
                </div>
                {children}
                <br />
            </Card.Body>
        </Card>
    );
}
