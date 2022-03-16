import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;

// imported font awesome question mark icon
// passed it a prop with the size of 30px
// don't use a normal a tag for redirection, it only reloads the page, you should have load a new page immediately from the client side
// a tags are ok if you're linking to an off site page, i.e. another website
// internal redirections should use Link instead of a tag, and to instead of href
