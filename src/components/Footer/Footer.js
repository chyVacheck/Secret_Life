import './Footer.css';
const data = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>© {data} Secret Life</p>
    </footer>
  );
}

export default Footer;
