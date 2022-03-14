import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingsSelect from './RatingsSelect';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const handleTextChange = (e) => {
    // if the text is empty, button is disabled, message is null
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
      // if the text is not empty but less than 10
    } else if (text != '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('The text must be 10 characters long.');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    // picks up the key presses
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingsSelect />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review."
            value={text}
          />
          {/* set the buttons prop(isDisabled) to the state(btnDisabled) */}
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {/* the message is set to a conditional */}
        {message && <div className="message">{message}</div>}
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
// new state added, btnDisabled, on page load is set to disabled until message hits 10 characters, default is set to true/disabled
// set the buttons prop(isDisabled) to the new state(btnDisabled) which is true by default
// new state added, message, the message for the text limit, empty string('') by default
// the message is set as a conditional so there is always one, if there's a message(message) then(&&) <div>{message}</div>
// validation is added to the handleTextChange event
