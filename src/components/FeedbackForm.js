export default function FeedbackForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log('Form submitted');
        onClose(window.alert("Thank you for your feedback!")); 
        
    };

    return (
        <div className="feedback-form">
            <h2>Teile uns Dein Feedback mit!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Feedback:
                    <textarea name="feedback"></textarea>
                </label>

                <div className="button-container">
                    <button type="submit" className="submit-button">Senden</button>
                    <button type="button" className="close-button" onClick={onClose}>
                        Schließen
                    </button>
                </div>
            </form>
        </div>
    );
}

