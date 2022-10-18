import './CastingApplication.css';
import Title from './../../components/Title/Title';

import { FormValidator } from './../../components/FormValidator';
import { form } from './../../utils/constants';


function CastingApplication() {

  return (
    <section className='сasting'>
      <Title>Casting</Title>

      <form
        action="mail.php"
        method="post"
        name="form"
        id="casting-form"
        noValidate
      >
        {/* name, surname, city */}
        <div className="casting__group">
          {/* name */}
          <div className="casting__field" id="casting__fieldcasting__field-name">
            <input
              minLength="3"
              maxLength="30"
              name="name"
              type="text"
              required
              placeholder="* first name"
              className="casting__input"
              id="casting-input-name"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-name-error-mesage"
            ></span>
          </div>

          {/* surname */}
          <div className="casting__field" id="casting__field-second-name">
            <input
              minLength="3"
              maxLength="30"
              name="secondName"
              type="text"
              required
              placeholder="* surname"
              className="casting__input"
              id="casting-input-second-name"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-second-name-error-mesage"
            ></span>
          </div>

          {/* city */}
          <div className="casting__field" id="casting__field-city">
            <input
              minLength="3"
              maxLength="30"
              name="city"
              type="text"
              required
              placeholder="* city"
              className="casting__input"
              id="casting-input-city"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-city-error-mesage"
            ></span>
          </div>
        </div>

        {/* tel, email */}
        <div className="casting__group">
          {/* tel */}
          <div className="casting__field" id="casting__field-tel">
            <input
              name="tel"
              type="tel"
              required
              placeholder="* telefon"
              className="casting__input"
              id="casting-input-tel"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-number-error-mesage"
            ></span>
          </div>

          {/* email */}
          <div className="casting__field" id="casting__field-email">
            <input
              minLength="5"
              maxLength="35"
              name="email"
              type="email"
              required
              placeholder="* email"
              className="casting__input"
              id="casting-input-email"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-email-error-mesage"
            ></span>
          </div>
        </div>

        {/* age, tatoo height */}
        <div className="casting__group">
          {/* age */}
          <div className="casting__field" id="casting__field-age">
            <input
              min="15"
              max="80"
              name="age"
              type="number"
              required
              placeholder="* age"
              className="casting__input"
              id="casting-input-age"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-age-error-mesage"
            ></span>
          </div>

          {/* tatoo */}
          <div className="casting__field" id='casting__field-tatoo'>
            <input
              minLength="2"
              maxLength="3"
              name="tatoo"
              required
              type="text"
              placeholder="* do you have tatoo ?"
              className="casting__input"
              id="casting-input-tatoo"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-tatoo-error-mesage"
            ></span>
          </div>

          {/* height */}
          <div className="casting__field" id="casting__field-height">
            <input
              min="110"
              name="height"
              type="number"
              required
              placeholder="* height"
              className="casting__input"
              id="casting-input-height"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-height-error-mesage"
            ></span>
          </div>
        </div>

        {/* nationality, inst */}
        <div className="casting__group">
          {/* nationality */}
          <div className="casting__field">
            <input
              required
              minLength="4"
              name="nationality"
              type="text"
              placeholder="* Nationality"
              className="casting__input"
              id="casting-input-instagram-link"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-instagram-link-error-mesage"
            ></span>
          </div>

          {/* inst */}
          <div className="casting__field">
            <input
              required
              minLength="4"
              maxLength="35"
              name="instagram"
              type="text"
              placeholder="* inst"
              className="casting__input"
              id="casting-input-instagram-link"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-instagram-link-error-mesage"
            ></span>
          </div>

        </div>

        {/* parameter */}
        <div className="casting__group">
          {/* bust */}
          <div className="casting__field" id="casting__field-bust">
            <input
              min="20"
              max="250"
              name="bust"
              type="number"
              required
              placeholder="* bust"
              className="casting__input"
              id="casting-input-bust"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-bust-error-mesage"
            ></span>
          </div>

          {/* waist */}
          <div className="casting__field" id="casting__field-waist">
            <input
              min="20"
              max="250"
              name="waist"
              type="number"
              required
              placeholder="* waist"
              className="casting__input"
              id="casting-input-waist"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-waist-error-mesage"
            ></span>
          </div>

          {/* hips */}
          <div className="casting__field" id="casting__field-hips">
            <input
              min="20"
              max="250"
              name="hips"
              type="number"
              required
              placeholder="* hips"
              className="casting__input"
              id="casting-input-hips"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-hips-error-mesage"
            ></span>
          </div>
        </div>

        {/* comment */}
        <div className="casting__field" id="casting__field-comment">
          <textarea
            name="comment"
            type="text"
            placeholder="any comments"
            className="casting__input"
            id="casting-input-comment"
          />
          {/* error-mesage */}
          <span
            className="casting__error-mesage"
            id="casting-comment-error-mesage"
          ></span>
        </div>

        {/* submit */}
        <button
          disabled
          type="submit"
          id="casting-button-submit"
          className="casting__submit-button casting__submit-button_invalid"
        >
          Отправить заявку
        </button>
      </form>
    </section>
  )
}

window.onload = function () {
  const root = document.querySelector('#root');
  const castingFormElement = root.querySelector('#casting-form');

  const Castingform = new FormValidator(form, castingFormElement);
  Castingform.enableValidation();
};

export default CastingApplication;
