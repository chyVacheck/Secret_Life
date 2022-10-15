import './Woman.css';

function Woman({ woman }) {

  const mainPhoto = woman.mainPhoto;
  const firstName = woman.firstName;
  const secondName = woman.secondName;
  const age = woman.age;
  const height = woman.height;
  const weight = woman.weight;
  const parameter = woman.parameter;
  const nationality = woman.nationality;

  return (
    <article className='woman'>
      <div className='woman__card'>
        <img className='woman__main-photo' src={mainPhoto} />
        {/* <ul className='woman__list'>
        </ul> */}
      </div>

      <h4 className='woman__title'>
        {firstName + ' ' + secondName}
      </h4>

    </article>
  );
}

export default Woman;
