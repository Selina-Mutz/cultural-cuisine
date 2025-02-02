import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import empanadaIcon from '../data/icons/empanada_icon.png';
import './css/InfoToast.css';

/**
 * Component displaying a welcome message and instructions on how to navigate the web app
 * 
 * @returns {React.JSX.Element}
 */
export default function InfoToast() {

    /**
     * State storing a boolean value indicating whether the element is shown
     */
    const [showToast, setShowToast] = useState(true);

    return (
        <Toast
            show={showToast}
            id='info-toast'>
            <Button
                variant='light'
                id='close-toast'
                title='Schließen'
                onClick={() => setShowToast(false)}>
                x
            </Button>
            <Toast.Body
                className='mt-3 p-3'
                id="toast-body">
                Willkommen!<br /><br />
                Auf dieser Seite zeigen wir Teigtaschen Rezepte aus aller Welt.<br /><br />
                Um die Rezepte zu öffnen, klicke auf die Marker <img 
                                src={empanadaIcon} 
                                alt={"Empanada Teigtaschen Icon"} 
                                id="toast-empanada-icon" 
                            /> auf der Karte. <br /><br />
                Ein Klick auf den Ortsnamen auf der linken Seite springt zum Marker des dazugehörigen Rezeptes.
            </Toast.Body>
        </Toast>
    );
}
