import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState(
    'This is an example from the feedback item.'
  );

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;

// state is basically data, 2 types, component level and global
// component level is specific to only that component, i.e. a nav container that's only opened or closed
// global is specific to everything, an rray of data needed at multiple locations
// import with { useStat } call it as a function in a destructured array variable
// first is the name of the variable, second is the function to update the state
// any time you want to change the state, or data, with an event, you must call the state's function and pass it the new data
// state in React is imutable, it can't be changed, it has to be reset
