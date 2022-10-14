
import './Link.css';

function Link({ src, children }) {

  return (
    <a
      target="_blank"
      className="link link_black"
      href={src}
    >
      {children}
    </a>
  );
}

export default Link;
