import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

// pass in a destructured prop { children }, child elements(i.e. div span p)
// can add child containers inside the Card component used in FeedbackItem.jsx
// commented out return is a conditional class, classes are wrapped in {} then `` and a conditional statement can be added
// the class that is the condition starts with $ and wrapped with {}
// the condition reads as 'if reverse is true'(reverse) 'then i want the class of'(&&) 'reverse'
// new return is using a conditional style, starts with 'style=' after the class name
// conditional style uses ternary operator, 'if reverse is true'(reverse ?) 'background = #000' 'else'(:) #fff, same idea for the text too
// conditional style is used, so .css style is commented out
// default prop used to start the conditional style off as false
// set PropType for children and reverse props as a node and boolean, for extra checks, more robust, less breakage
