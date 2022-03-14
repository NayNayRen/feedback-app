import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review."
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

// typically when you have a form you have state(data) for each input in that form
// importing useState at the top of the file is needed
// set the state(data) as a destructured variable const [text, setText] = useState('')
// the method/function used to update the state(data) is setText
// onChange event is added to the input and setText is passed e.target.value to pick up key strokes
// button element is replaced with Button component
