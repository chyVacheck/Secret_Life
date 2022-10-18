import './Footer.css';
import instagram from './../../images/icon/instagram.svg';
import telegram from './../../images/icon/telegram.svg';
import Creator from './../../components/Creator/Creator.js';

const currentData = new Date().getFullYear();
const YEAR_OF_SITE_CREATION = 2022;
let dateForFooter = YEAR_OF_SITE_CREATION.toString();

if (YEAR_OF_SITE_CREATION < currentData) {
  dateForFooter = YEAR_OF_SITE_CREATION.toString() + ' - ' + currentData.toString();
}

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer__container'>
        <div className='footer__column'>
          <p className='footer__copyright'>© {dateForFooter} Secret Life</p>
          <Creator />
        </div>


        <nav>
          <ul className='footer__list'>
            {/* instagram */}
            <li className='footer__element-list'>
              <a className='footer__link' href='https://www.instagram.com/kuchuruk_tatyana/'>
                <img className='footer__link_icon' src={instagram} ></img>
              </a>
            </li>
            {/* telegram */}
            <li className='footer__element-list'>
              <a className='footer__link' href='#'>
                <img className='footer__link_icon' src={telegram} ></img>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
