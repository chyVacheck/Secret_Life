
import './Link.css';

function Link({ src, children, className = '' }) {

  const classStr = 'link' + ' link_black' + (className === '' ? '' : ' ' + className);

  return (
    <a
      target="_blank"
      className={classStr}
      href={src}
    >
      {children}
    </a>
  );
}

export default Link;
