
import './Home.css';
import Title from './../../components/Title/Title';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <section className='home'>
      <NavLink className='home__navlink' to='/women'>
        <Title>Secret life</Title>
        <h3 className='home__title'>
          DISCREET INTERNATIONAL TRAVEL COMPANIONS
        </h3>

        <h4 className='home__subtitle'>
          Agency Luxury Services
        </h4>

        <h4 className='home__subtitle'>
          We Create Beautiful Connections
        </h4>

        <p className='home__paragraph'>
          <span className='home__logo'>Secret life</span> Ⓡ, as your personal VIP concierge, provides all manner of elite services to ensure your time with us is exceptional.  Personal attention is what we're all about, and you will never be fobbed off with a one-sentence email reply or a hard sell situation.
          We provide truly elite experiences for discerning gentlemen seeking VIP top model meetings and GFE travel companions.
          Click into any of the following areas for further information on what we can offer
        </p>
        <p className='home__paragraph'>
          Premium Elite Agency <span className='home__logo'>Secret life</span> Models Ⓡ International
          If there's one thing we know and appreciate, it's premium dating and natural beauty.
          Everything we do is about you. Our expert VIP agency creates beautiful, discreet connections.
        </p>
      </NavLink>
    </section>
  );
}

export default Home;
