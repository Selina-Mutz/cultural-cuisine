import { useEffect } from 'react';
import React from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Button, Card } from 'react-bootstrap';
import { mapCenter, mapZoom } from './App';
import './css/RecipeBox.css';

/**
 * Component displaying a box containing a narrative fragment, the related media, any embedded child elements and the narrating character's bio
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children Embedded children
 * @param {string} props.narrativeFragment The narrative fragment to be displayed
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function RecipeBox({ children, titleText, timeText, difficultyText, cultureText, ingredientsArray, preparationTextArray, tipsTextArray, setFeatureFocus }) {
    
    /**
     * The Leaflet map object
     */
    const map = useMap();

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
                    <Card.Text
                        className="subsection-title-recipe-box">
                        Zutaten:
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
