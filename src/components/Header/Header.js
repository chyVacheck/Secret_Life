
import './Header.css';
import instagram from './../../images/icon/instagram.svg';
import telegram from './../../images/icon/telegram.svg';


function Header() {

  return (
    <header className='header'>
      <section className='header__container'>
        {/* логотип */}
        <div>
          <img className='header__logo' alt='secret life' />
        </div>

        {/* список страниц */}
        <nav className='header__column'>
          <ul className='header__list'>
            {/* WOMEN */}
            <li className='header__element-list'>
              <a className='header__link' href='/women'>
                <p className='header__link_text'>WOMEN</p>
              </a>
            </li>
            {/* BECOME A MODEL */}
            <li className='header__element-list'>
              <a className='header__link' href='/become a model'>
                <p className='header__link_text'>BECOME A MODEL</p>
              </a>
            </li>
            {/* CONTACTS */}
            <li className='header__element-list'>
              <a className='header__link' href='/contacts'>
                <p className='header__link_text'>CONTACTS</p>
              </a>
            </li>
          </ul>

          <ul className='header__social-network-list'>
            {/* instagram */}
            <li className='header__social-network'>
              <a className='header__link' href='https://www.instagram.com/kuchuruk_tatyana/'>
                <img className='header__link_icon' src={instagram} ></img>
              </a>
            </li>
            {/* telegram */}
            <li className='header__social-network'>
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
