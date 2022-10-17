import './CastingApplication.css';
import Title from './../../components/Title/Title';

function CastingApplication() {
  return (
    <section className='сastingApplication'>
      <Title>CastingApplication</Title>
      <form
        action="mail.php"
        method="post"
        name="form"
        id="popup-form"
        noValidate
      >
        {/* name */}
        <div className="popup__field" id="popup__field-name">
          <input
            minLength="3"
            maxLength="30"
            name="name"
            type="text"
            required
            placeholder="Имя"
            className="popup__input"
            id="popup-input-name"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-name-error-mesage"
          ></span>
        </div>

        {/* second name */}
        <div className="popup__field" id="popup__field-second-name">
          <input
            minLength="3"
            maxLength="30"
            name="secondName"
            type="text"
            required
            placeholder="Фамилия"
            className="popup__input"
            id="popup-input-second-name"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-second-name-error-mesage"
          ></span>
        </div>

        {/* city */}
        <div className="popup__field" id="popup__field-city">
          <input
            minLength="3"
            maxLength="30"
            name="city"
            type="text"
            required
            placeholder="Город"
            className="popup__input"
            id="popup-input-city"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-city-error-mesage"
          ></span>
        </div>

        {/* age */}
        <div className="popup__field" id="popup__field-age">
          <input
            min="15"
            name="age"
            type="number"
            required
            placeholder="Возраст"
            className="popup__input"
            id="popup-input-age"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-age-error-mesage"
          ></span>
        </div>

        {/* height */}
        <div className="popup__field" id="popup__field-height">
          <input
            min="120"
            name="height"
            type="number"
            required
            placeholder="Рост"
            className="popup__input"
            id="popup-input-height"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-height-error-mesage"
          ></span>
        </div>

        {/* bust */}
        <div className="popup__field" id="popup__field-bust">
          <input
            min="20"
            name="bust"
            type="number"
            required
            placeholder="Грудь"
            className="popup__input"
            id="popup-input-bust"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-bust-error-mesage"
          ></span>
        </div>

        {/* waist */}
        <div className="popup__field" id="popup__field-waist">
          <input
            min="20"
            name="waist"
            type="number"
            required
            placeholder="Талия"
            className="popup__input"
            id="popup-input-waist"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-waist-error-mesage"
          ></span>
        </div>

        {/* hips */}
        <div className="popup__field" id="popup__field-hips">
          <input
            min={20}
            name="hips"
            type="number"
            required
            placeholder="Бедра"
            className="popup__input"
            id="popup-input-hips"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-hips-error-mesage"
          ></span>
        </div>

        {/* photo */}
        <div className="popup__field" id="popup__field-photo">
          <input
            name="photo"
            type="file"
            required
            placeholder="Имя"
            className="popup__input"
            id="popup-input-photo"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-photo-error-mesage"
          ></span>
        </div>

        {/* comment */}
        <div className="popup__field" id="popup__field-comment">
          <input
            name="comment"
            type="text"
            placeholder="Коментарий"
            className="popup__input"
            id="popup-input-comment"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-comment-error-mesage"
          ></span>
        </div>

        {/* email */}
        <div className="popup__field" id="popup__field-email">
          <input
            minLength="5"
            maxLength="35"
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className="popup__input"
            id="popup-input-email"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-email-error-mesage"
          ></span>
        </div>

        {/* tel */}
        <div className="popup__field" id="popup__field-tel">
          <input
            name="tel"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            placeholder="0444618061"
            className="popup__input"
            id="popup-input-tel"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-number-error-mesage"
          ></span>
        </div>

        {/* instagram-link */}
        <div className="popup__field">
          <input
            name="instagramLink"
            type="url"
            placeholder="https://instagram.com/kuchuruk_tatyana"
            className="popup__input"
            id="popup-input-instagram-link"
          />
          {/* error-mesage */}
          <span
            className="popup__error-mesage"
            id="popup-instagram-link-error-mesage"
          ></span>
        </div>

        {/* submit */}
        <button
          disabled
          type="submit"
          id="popup-button-submit"
          className="popup__submit-button popup__submit-button_invalid"
        >
          Отправить заявку
        </button>
      </form>
    </section>
  );
}

export default CastingApplication;
