import { NavLink } from 'react-router-dom';
import './Woman.css';

function Woman({ woman, setSelectedWoman }) {

  const mainPhoto = woman.mainPhoto;
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
        {/* <ul className='woman__list'>
        </ul> */}
      </div>

      <h4 className='woman__title'>
        {firstName}
      </h4>

    </article>
  );
}

export default Woman;
