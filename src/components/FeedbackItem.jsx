import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* you can set onClick events inline using arrow functions or named function */}
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="#000" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

// passed the item destructured to FeedbackItem from FeedbackList
// now the data from FeedbackData can be used as the prop 'item'
// created a shared folder containing Card.jsx, since it will be shared at multiple sources
// replaced card div with Card componenet, now has child elements that are added as props to Card.jsx
// added a prop called reverse to the Card component, passed in Card.jsx also
// set PropType for item prop as an object, for extra checks, more robust, less breakage

// add font-awesome icons by stopping the server, typing 'npm i react-icons', start the server
// import icons from 'react-icons/fa', the name inside the {} after the import is the icon you're using
// FaTimes is the icon, added as a component <FaTimes />, styled inline with color='purple'
