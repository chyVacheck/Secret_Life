
import Link from '../Link/Link.js';
import './Creator.css';

function Creator() {

  return (
    <p className="creator">
      {'create by '}
      <Link src='https://github.com/chyVacheck'>
        Dmytro
      </Link>
    </p>
  );
}

export default Creator;
