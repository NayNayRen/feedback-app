import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
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
