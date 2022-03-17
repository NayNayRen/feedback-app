import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // set and use state the same as in App.js
  // const [feedback, setFeedback] = useState([
  //   {
  //     id: 1,
  //     text: 'item is from context',
  //     rating: 2
  //   }
  // ])

  return <FeedbackContext.Provider>{children}</FeedbackContext.Provider>;
};

// context is the ability to pass state(data) through the component tree without having to pass it using props at each level
// context will wrap all components of the App similar to how Router does
// folder named context is added to src, and a file of FeedbackContext.js is created
// import context and state hooks
// set context as a variable and call createContext
// create a Provider and pass a prop(named children) that will act as all components of the app
// any values that are going to be used are passed as a prop to the FeedbackContext.Provider labeled as value
