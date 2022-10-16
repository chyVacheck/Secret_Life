import './Woman.css';
import React from "react";

import Title from '../../components/Title/Title';

import { ListOfWomen } from '../../utils/constants.js';

import mainPhoto from './../../images/women/first/photo_01.jpg';
import photo_2 from './../../images/women/first/photo_02.jpg';
import photo_3 from './../../images/women/first/photo_03.jpg';
import photo_4 from './../../images/women/first/photo_04.jpg';
import photo_5 from './../../images/women/first/photo_05.jpg';
import photo_6 from './../../images/women/first/photo_06.jpg';


function Woman({ selectedWoman }) {
  ListOfWomen.map(() => { });

  const name = selectedWoman.firstName;
  const secondName = selectedWoman.secondName;
  const age = selectedWoman.age;
  const height = selectedWoman.height;
  const weight = selectedWoman.weight;
  const bust = selectedWoman.parameter.bust;
  const waist = selectedWoman.parameter.waist;
  const hips = selectedWoman.parameter.hips;
  const nationality = selectedWoman.nationality;

  React.useEffect(() => {
    console.log();
  }, [])

  return (
    <section className='page-woman'>
      <Title className='page-woman__title'>
        {name + ' ' + secondName}
      </Title>

      {/* Описание */}
      <article className='page-woman__description'>
        {/* AGE */}
        <div>
          <span>age:</span>
          <span className='page-woman__meaning'>{age}</span>
        </div>
        {/* HEIGHT */}
        <div>
          <span>height:</span>
          <span className='page-woman__meaning'>{height}</span>
        </div>
        {/* WEIGHT */}
        <div>
          <span>weight:</span>
          <span className='page-woman__meaning'>{weight}</span>
        </div>

        {/* BUST */}
        <div>
          <span>bust:</span>
          <span className='page-woman__meaning'>{bust}</span>
        </div>

        {/* WAIST */}
        <div>
          <span>waist:</span>
          <span className='page-woman__meaning'>{waist}</span>
        </div>

        {/* HIPS */}
        <div>
          <span>hips:</span>
          <span className='page-woman__meaning'>{hips}</span>
        </div>

        {/* NATIONALITY */}
        <div>
          <span>nationality:</span>
          <span className='page-woman__meaning'>{nationality}</span>
        </div>
        {/* SHOE:38 EYES:BROWN HAIR:BROWN */}
      </article>

      {/* фоточки */}
      <article className='page-woman__photos'>
        <article className='page-woman__column'>
          <img className='page-woman__photo' src={mainPhoto} />
          <img className='page-woman__photo' src={photo_2} />
          <img className='page-woman__photo' src={photo_3} />
        </article>

        <article className='page-woman__column'>
          <img className='page-woman__photo' src={photo_4} />
          <img className='page-woman__photo' src={photo_5} />
          <img className='page-woman__photo' src={photo_6} />
        </article>
      </article>

    </section>
  );
}

export default Woman;
