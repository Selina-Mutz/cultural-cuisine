import './css/FeedbackButton.css';

export default function FeedbackButton({ onClick }) {
  return (
      <button className="feedback-button" onClick={onClick}>
          Feedback
      </button>
  );
}

