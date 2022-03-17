import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // set and use state the same as in App.js
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'item is from context',
      rating: 2,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
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
// wrap from under the return above the <Router> and below the </Router>
