import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // loading icon, true is passed to show it until fetch is done
  const [isLoading, setIsLoading] = useState(true);
  // default state is an empty array, data is passed via mock backend
  const [feedback, setFeedback] = useState([]);
  // new state to edit feedback item
  const [feedbackEdit, setFeedbackEdit] = useState({
    // item will be the flag for the item selected
    item: {},
    // default editability set to false, so you can't edit unless clicked
    edit: false,
  });
  // useEffect is called to load once with the page, calling the fetch
  useEffect(() => {
    fetchFeedback();
  }, []);
  // fetch data, async/await forces other code to wait until response returns data
  const fetchFeedback = async () => {
    // response is the end point with our db.json file
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  // add
  const addFeedback = async (newFeedback) => {
    // posting/saving the new feedback item
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    // spread operator(...) to copy feedback array then add the new fedback
    setFeedback([data, ...feedback]);
  };
  // delete
  const deleteFeedback = async (id) => {
    // add a confirmation window when button is clicked
    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
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
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();
    // setFeedback maps a conditional to check id, adds and updates
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        // data
        feedback,
        // piece of state to edit the feedback entry
        feedbackEdit,
        // loading icon
        isLoading,
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
// removed hard coded array to use data from the backend db.json file
// useEffect is imported so the app loads with the page, second argument is an empty array []
// query parameters start with a ? in the fetch
// if your fetching data from a backend you should have some sort of state(data) loading icon
// new piece of state(data) called isLoading will be used for a loading icon
// set the deault state to true, until the fetch is made
