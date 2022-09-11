// import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onMakeFeedback }) {
    return (
        <ul>
            {options.map(option => <li key={option}>
                <button type='button' onClick={() => onMakeFeedback(option)}>{option}</button>
            </li>
            )}
        </ul>
    )
}

export default FeedbackOptions
