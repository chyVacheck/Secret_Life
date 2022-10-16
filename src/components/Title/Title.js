
import './Title.css';

function Title({ children, className = '' }) {
  const classStr = 'title' + (className === '' ? '' : ' ' + className);

  return (
    <h1 className={classStr}>
      {children}
    </h1>
  );
}

export default Title;
