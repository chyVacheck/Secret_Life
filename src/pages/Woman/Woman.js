import './Woman.css';
import React from "react";

import Title from '../../components/Title/Title';

import { ListOfWomen } from '../../utils/constants.js';


function Woman({ selectedWoman }) {
  ListOfWomen.map(() => { });

  const name = selectedWoman.firstName;
  const age = selectedWoman.age;
  const height = selectedWoman.height;
  const weight = selectedWoman.weight;
  const bust = selectedWoman.parameter.bust;
  const waist = selectedWoman.parameter.waist;
  const hips = selectedWoman.parameter.hips;
  const nationality = selectedWoman.nationality;
  const instagram = selectedWoman.instagram;

  return (
    <section className='page-woman'>
      <Title className='page-woman__title'>
        {name}
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
        {/* INSTAGRAM */}
        <div>
          <span>instagram</span>
          <span className='page-woman__meaning'>{instagram}</span>
        </div>
        {/* SHOE:38 EYES:BROWN HAIR:BROWN */}
      </article>
      {/* фоточки */}
      <article className='page-woman__photos'>
        <article className='page-woman__column'>
          {
            selectedWoman.photos.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <img key={index} className='page-woman__photo' src={item} />
                )
              }
            })

          }
        </article>

        <article className='page-woman__column'>
          {
            selectedWoman.photos.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <img key={index} className='page-woman__photo' src={item} />
                )
              }
            })

          }
        </article>
      </article>

    </section>
  );
}

export default Woman;
