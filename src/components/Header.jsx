import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header;

// when you pass a prop you need to catch it in the component, arg in the () of Header function
// shorthand so you don't need to type props. is curly braces in the function's () and only the name of the prop itself, called 'destructering'
// you set deafaultProps for the component if no prop is passed in
// propTypes check the type of prop being passed, i.e. boolean, string, number, gives extra type checking for your app, not needed though
// to set an inline style double curly braces are needed, style={{}} in the element to be styled
// any style with a hyphen '-' needs to be camelCase
// you can also set styles as variables, then only use the variable name and single curly braces
// can also style as props, the same as using default text in the component
// you can just use the global styles as well, multiple ways to style in React
