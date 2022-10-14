import './Footer.css';
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
        <p className='footer__copyright'>© {dateForFooter} Secret Life</p>
      </section>
    </footer>
  );
}

export default Footer;
