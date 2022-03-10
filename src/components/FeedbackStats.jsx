import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;

// feedback array is passed as a deconstructed prop
// set the feedback prop type to an array for extra checking, makes sure it's an array
