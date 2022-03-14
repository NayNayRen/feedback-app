import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;

// button component created and placed in the shared folder as it has the potential to be used throughout the app
// children prop passed for the text that is wrapped by the button element
// version prop is passed to represent a primary or secondary, for class selection
// type prop is passed to show the type of button i.e. submit
// isDisabled prop is passed to show whether it is or is not clickable, for min text length
// default props set for default class/actions if nothing else is passed
// props are used so prop types need to be set, is a node(element) is used, it is always set to isRequired
