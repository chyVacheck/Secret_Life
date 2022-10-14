
import './Header.css';
import instagram from './../../images/icon/instagram.svg';
import telegram from './../../images/icon/telegram.svg';

function Header({ objChangeContent }) {

  const women = objChangeContent.women;
  const become_a_model = objChangeContent.become_a_model;
  const contacts = objChangeContent.contacts;

  return (
    <header className='header'>
      <section className='header__container'>
        {/* логотип */}
        <img className='header__logo' alt='secret life' />

        {/* список страниц */}
        <nav>
          <ul className='header__list'>
            <li className='header__element-list'>
              <a onClick={women} className='header__link' href='#'>
                <p className='header__link_text'>WOMEN</p>
              </a>
            </li>
            <li className='header__element-list'>
              <a onClick={become_a_model} className='header__link' href='#'>
                <p className='header__link_text'>BECOME A MODEL</p>
              </a>
            </li>
            <li className='header__element-list'>
              <a onClick={contacts} className='header__link' href='#'>
                <p className='header__link_text'>CONTACTS</p>
              </a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='https://www.instagram.com/kuchuruk_tatyana/'>
                <img className='header__link_icon' src={instagram} ></img>
              </a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='#'>
                <img className='header__link_icon' src={telegram} ></img>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
