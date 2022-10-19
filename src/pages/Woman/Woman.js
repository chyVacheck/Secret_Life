import './Woman.css';
import React from "react";
import Title from '../../components/Title/Title';

import { allPhotos } from './../../utils/images.js';


import Icon from '../../images/icon/instagram_grey.svg';

function Woman({ selectedWoman }) {

  const id = selectedWoman.id;
  const name = selectedWoman.firstName;
  const age = selectedWoman.age;
  const height = selectedWoman.height;
  const weight = selectedWoman.weight;
  const bust = selectedWoman.parameter.bust;
  const waist = selectedWoman.parameter.waist;
  const hips = selectedWoman.parameter.hips;
  const nationality = selectedWoman.nationality;
  const instagram = selectedWoman.instagram;
  const text = selectedWoman.text;

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
          <a target="_blank" className='page-woman__meaning'
            href={`https://www.instagram.com/${instagram}/`}>
            <img className='page-woman__icon' src={Icon} />
          </a>
        </div>
        {/* SHOE:38 EYES:BROWN HAIR:BROWN */}
      </article>
      {/* фоточки */}
      <article className='page-woman__photos'>
        <article className='page-woman__column'>
          {
            allPhotos[id].map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={index} className='page-woman__photo-card'>
                    <img key={index} className='page-woman__photo' src={item} />
                  </div>
                )
              }
            })

          }
        </article>

        <article className='page-woman__column'>
          {
            allPhotos[id].map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <div key={index} className='page-woman__photo-card'>
                    <img key={index} className='page-woman__photo' src={item} />
                  </div>
                )
              }
            })

          }
        </article>
      </article>

      {/* Обо мне */}
      <article className='page-woman__about'>
        <h2 className='page-woman__about-title'>About me</h2>
        <p className='page-woman__about-text'>{text}</p>
      </article>

    </section>
  );
}

export default Woman;
