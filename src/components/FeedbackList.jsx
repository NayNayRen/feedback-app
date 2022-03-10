import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback }) {
  // conditional set in case there is no feedback item, else return the list
  if (!feedback || feedback.length === 0) {
    return <p>There is no feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
      {/* iterating through the feedback list */}
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

// feedback prop from App.js is passed destructured to the FeedbackList function
// don't forget jsx in the map() needs to be wrapped in ()
// imported FeedbackItem from FeedbackItem.jsx, used it in the map(), passed the items id as the key(since it needs to be a unique value) and the item/text itself
// set PropType for feedback array as arrayOf and (), PropTypes.shape is used for the types of each object of the array wrapped in ({}) for extra checks, more robust, less breakage
