
import {
  Luda_photos,
  Alina_photos,
  Tomiris_photos,
  Nastya_photos
} from './images.js';

export const form = {
  inputSelector: '.casting__input',
  submitButtonSelector: '#casting-button-submit',
  activeButtonClass: 'casting__submit-button_valid',
  inactiveButtonClass: 'casting__submit-button_invalid',
  buttonClass: 'button',
  errorSelector: '.casting__error-mesage',
};

export const errorMesages = {
  tooShort: 'Ввод слишком короткий',
  tooLong: 'Ввод слишком длинный',
  typeMismatchUrl: 'Введите ссылку на изображение',
  valueMissing: 'Осталось заполнить',
  rangeUnderflow: 'Нужно число по больше',
  rangeOverflow: 'Нужно число по меньше',

}

export const ListOfWomen = [
  {
    mainPhoto: Luda_photos[0],
    firstName: 'Luda',
    age: 22,
    height: 168,
    weight: 47,
    parameter: {
      bust: 90,
      waist: 58,
      hips: 90,
    },
    photos: Luda_photos,
    nationality: 'Ukrainian',
    instagram: 'Livanishina',
    text: ''
  },
  {
    mainPhoto: Alina_photos[0],
    firstName: 'Alina',
    age: 17,
    height: 169,
    weight: 49,
    parameter: {
      bust: 90,
      waist: 60,
      hips: 90,
    },
    photos: Alina_photos,
    nationality: 'Ukrainian',
    instagram: 'ahoshton.a',
    text: ''
  },
  {
    mainPhoto: Tomiris_photos[1],
    firstName: 'Tomiris',
    age: 17,
    height: 171,
    weight: 51,
    parameter: {
      bust: 84,
      waist: 64,
      hips: 93,
    },
    photos: Tomiris_photos,
    nationality: 'Kazakh',
    instagram: 'lashesakb',
    text: ''
  },
  {
    mainPhoto: Nastya_photos[1],
    firstName: 'Nastya',
    age: 18,
    height: 166,
    weight: 45, //todo написать реальный вес
    parameter: {
      bust: 82,
      waist: 61,
      hips: 92,
    },
    photos: Nastya_photos,
    nationality: 'Polka',
    instagram: 'nasti_k6',
    text: ''
  },
]

export const inputValidClass = 'casting__input-valid';
export const inputInValidClass = 'casting__input-invalid';
