import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  // feedback is passed into the empty object set as the context
  const { feedback } = useContext(FeedbackContext);
  // calculating the ratings average, accumulator(default set to 0) and current value
  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;
  // sets average to only 1 decimal place, regEx clips the 0 if it's a whole number
  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {/* if the average is NaN(empty feedback array) then average is 0 */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;

// import useContext from react along with the feedbackContext created
// use it by bringing it in as an empty object{} and passing it the context imported(FeedbackContext)
// feedback is passed into the empty object set as the context
