
import Title from '../../components/Title/Title.js';

import Link from '../../components/Link/Link';
import './Contacts.css';

const text = '( SEO and Director )';

function Contacts() {
  return (
    <section className='contacts'>
      <Title>
        Contacts
      </Title>

      <section className='contacts__info'>
        {/* Татьяна */}
        <article className='contacts__column'>
          <h2 className='contacts__title'>Tatyana Kucheruk</h2>
          <p className='contacts__text'>{text}</p>
          <div className='contacts__email'>
            <Link src='mailto:kuchuruk87@icloud.com' className='contacts__link'>
              kuchuruk87@icloud.com
            </Link>
          </div>
        </article>
        {/* Анна */}
        <article className='contacts__column'>
          <h2 className='contacts__title'>Anna Podoprigora</h2>
          <p className='contacts__text'>{text}</p>
          <div className='contacts__email'>
            <Link src='mailto:apodoprigora@icloud.com' className='contacts__link'>
              apodoprigora@icloud.com
            </Link>
          </div>

        </article>
      </section>


    </section>
  );
}
export default Contacts;
