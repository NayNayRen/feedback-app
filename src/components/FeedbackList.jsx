import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  // conditional set in case there is no feedback item
  if (!feedback || feedback.length === 0) {
    return <p>There is no feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;

// feedback prop from App.js is passed destructured to the FeedbackList function
// don't forget jsx in the map() needs to be wrapped in ()
// imported FeedbackItem from FeedbackItem.jsx, used it in the map(), passed the items id as the key(since it needs to be a unique value) and the item/text itself
