
import './Header.css';
import instagram from './../../images/icon/instagram.svg';
import telegram from './../../images/icon/telegram.svg';

function Header() {
  return (
    <header className='header'>
      <section className='header__container'>
        {/* логотип */}
        <img className='header__logo' alt='secret life' />

        {/* список страниц */}
        <nav>
          <ul className='header__list'>
            <li className='header__element-list'>
              <a className='header__link' href='#'>WOMEN</a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='#'>BECOME A MODEL</a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='#'>CONTACTS</a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='https://www.instagram.com/kuchuruk_tatyana/'>
                <img className='header__icon' src={instagram} ></img>
              </a>
            </li>
            <li className='header__element-list'>
              <a className='header__link' href='#'>
                <img className='header__icon' src={telegram} ></img>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
