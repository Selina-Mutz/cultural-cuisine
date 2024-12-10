import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
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
                onClick={() => setShowToast(false)}>
                x
            </Button>
            <Toast.Body
                className='mt-3 p-3'>
                Willkommen!<br /><br />
                Auf dieser Seite zeigen wir Teigtaschen Rezepte aus aller Welt.<br /><br />
                Um mehr über die Rezepte zu erfahren, klicke auf die Marker <i className='bi bi-pin-fill' id='toast-icon' /> auf der Karte.
                Ein Klick auf den Ortsnamen auf der linken Seite springt zum Marker des dazugehörigen Rezeptes.
            </Toast.Body>
        </Toast>
    );
}
