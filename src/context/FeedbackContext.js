import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // set and use state the same as in App.js
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'this is the text from the first feedback entry.',
    },
    {
      id: 2,
      rating: 7,
      text: 'this would be the second entry of the feedback entries.',
    },
    {
      id: 3,
      rating: 4,
      text: ' and this is the third of the feedback entries.',
    },
  ]);
  // new state to edit feedback item
  const [feedbackEdit, setFeedbackEdit] = useState({
    // item will be the flag for the item selected
    item: {},
    // default editability set to false, so you can't edit unless clicked
    edit: false,
  });
  // add
  const addFeedback = (newFeedback) => {
    // unique id created from imported package above
    newFeedback.id = uuidv4();
    // spread operator(...) to copy feedback array then add the new fedback
    setFeedback([newFeedback, ...feedback]);
  };
  // delete
  const deleteFeedback = (id) => {
    // add a confirmation window when button is clicked
    if (window.confirm('Are you sure you want to delete this?')) {
      // if item id is not equal to the id being passed in, returns array minus deleted
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // edit
  const editFeedback = (item) => {
    // passes the item and calls setFeedbackEdit
    setFeedbackEdit({
      item,
      // changes item to be editable, default is false
      edit: true,
    });
  };
  // update
  const updateFeedback = (id, updatedItem) => {
    // setFeedback maps a conditional to check id, adds and updates
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        // data
        feedback,
        // piece of state to edit the feedback entry
        feedbackEdit,
        // add function
        addFeedback,
        // add function
        deleteFeedback,
        // edits feedback
        editFeedback,
        // update on input click
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

// context is the ability to pass state(data) through the component tree without having to pass it using props at each level
// context will wrap all components of the App similar to how Router does
// folder named context is added to src, and a file of FeedbackContext.js is created
// import context and state hooks
// set context as a variable and call createContext
// create a Provider and pass a prop(named children) that will act as all components of the app
// any values that are going to be used are passed to FeedbackContext.Provider component as an object via a prop labeled as value
// pass the name of the state to the value prop
// import Provider into App.js in order to wrap all components with
// wrap from under the return above the <Router> and below the </Router> in App.js
// state(data) was pulled from App.js and moved here, along with the functions to add, delete, and edit
// useContext and FeedbackContext were imported to FeedbackItem, List, and Form
// object variables were set with info needed for FeedbackItem, List, and Form files using useContext(FeedbackContext)
// updateFeedback is set with a ternary conditional, it reads 'if the id equals the id being passed, then spread(...) across the current item and upadatedItem, else(:) return the current item
