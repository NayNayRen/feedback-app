import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
  // feedback is passed into the empty object set as the context
  const { feedback, isLoading } = useContext(FeedbackContext);
  // conditional set in case there is no feedback item, else return the list
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>There is no feedback yet.</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {/* iterating through the feedback list */}
      {feedback.map((item) => (
        <FeedbackItem
          // props for FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {/* iterating through the feedback list */}
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         // props for FeedbackItem
  //         key={item.id}
  //         item={item}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;

// don't forget jsx in the map() needs to be wrapped in ()
// imported FeedbackItem from FeedbackItem.jsx, used it in the map(), passed the items id as the key(since it needs to be a unique value) and the item/text itself

// import useContext from react along with the feedbackContext created
// use it by bringing it in as an empty object{} and passing it the context imported(FeedbackContext)
// feedback is passed into the empty object set as the context
// handleDelete is moved to FeedbackContext.js
