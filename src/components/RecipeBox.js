import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Button, Card, Collapse } from 'react-bootstrap';
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
export default function RecipeBox({ children, titleText, timeText, difficultyText, cultureText, preparationTextArray, setFeatureFocus }) {
    
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
                    <Card.Header
                        id="title-recipe-box">
                        {titleText}
                    </Card.Header>
                </div>
                <div
                    id="properties-recipe-box-div">
                    <Card.Text
                        id="time-recipe-box">
                        {timeText}
                    </Card.Text>
                    <Card.Text
                        id="difficulty-recipe-box">
                        {difficultyText}
                    </Card.Text>
                </div>
                <div
                    id="culture-recipe-box-div">
                    <Card.Text
                        id="culture-recipe-box">
                        {cultureText}
                    </Card.Text>
                </div>
                <div
                    id="preparation-recipe-box-div">
                    <Card.Text
                        id="preparation-recipe-box">
                        {preparationTextArray}
                    </Card.Text>
                </div>
                {children}
                <br />
            </Card.Body>
        </Card>
    );
}
