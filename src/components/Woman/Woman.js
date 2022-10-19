import { NavLink } from 'react-router-dom';
import './Woman.css';

import { allPhotos } from './../../utils/images';

function Woman({ woman, setSelectedWoman }) {

  const mainPhoto = allPhotos[woman.id][0];
  const firstName = woman.firstName;

  function changeInfo() {
    setSelectedWoman(woman);
  }

  return (
    <article className='woman'>
      <div className='woman__card'>
        <NavLink onClick={changeInfo} className='woman__link' to='/woman'>
          <img className='woman__main-photo' src={mainPhoto} />
        </NavLink>
      </div>

      <h4 className='woman__title'>
        {firstName}
      </h4>

    </article>
  );
}

export default Woman;
