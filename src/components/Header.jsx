import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
}

export default Header;

// when you pass a prop you need to catch it in the component, arg in the () of Header function
// shorthand so you don't need to type props. is curly braces in the function's () and only the name of the prop itself, called 'destructering'
// you set deafaultProps for the component if no prop is passed in
// propTypes check the type of prop being passed, i.e. boolean, string, number, gives extra type checking for your app, not needed though
