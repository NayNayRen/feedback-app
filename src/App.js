import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  // feedback list as global/app level state, passed as a prop to FeedbackList
  const [feedback, setFeedback] = useState(FeedbackData);
  // added here in oreder to access feedback data ^^
  const deleteFeedback = (id) => {
    // add a confirmation window when button is clicked
    if (window.confirm('Are you sure you want to delete this?')) {
      // if item id is not equal to the id being passed in, returns array minus deleted
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        {/* props are passed from FeedbackList component */}
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

// the App return can have only 1 parent container, so wrap everything in an empty HTML fragment <></> then add whatever elements needed
// props are essentially properties of the components, 'text' in the Header component
// stored data in data folder as FeedbackData.js, exported from the file, imported here, and passed through the useState function

// state is basically data, 2 types, component level and global/app level
// component level is specific to only that component, i.e. a nav container that's only opened or closed
// global/app level is specific to everything, an rray of data needed at multiple locations
// import with { useState } call it as a function in a destructured array variable
// first is the name of the variable, second is the function to update the state
// any time you want to change the state, or data, with an event, you must call the state's function and pass it the new data
// state in React is imutable, it can't be changed, it has to be reset
