import './CastingApplication.css';
import Title from './../../components/Title/Title';

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
        {/* name, second name, city */}
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

          {/* second name */}
          <div className="casting__field" id="casting__field-second-name">
            <input
              minLength="3"
              maxLength="30"
              name="secondName"
              type="text"
              required
              placeholder="* second name"
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

        {/* age, height */}
        <div className="casting__group">
          {/* age */}
          <div className="casting__field" id="casting__field-age">
            <input
              min="15"
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

          {/* height */}
          <div className="casting__field" id="casting__field-height">
            <input
              min="120"
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

        {/* tel, instagram, email */}
        <div className="casting__group">
          {/* tel */}
          <div className="casting__field" id="casting__field-tel">
            <input
              name="tel"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
              placeholder="* 0444618061"
              className="casting__input"
              id="casting-input-tel"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-number-error-mesage"
            ></span>
          </div>

          {/* instagram */}
          <div className="casting__field">
            <input
              name="instagram"
              type="text"
              placeholder="* instagram nickname"
              className="casting__input"
              id="casting-input-instagram-link"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-instagram-link-error-mesage"
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
              placeholder="* example@gmail.com"
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

        {/* nationality, tatoo */}
        <div className="casting__group">
          {/* nationality */}
          <div className="casting__field">
            <input
              name="nationality"
              type="text"
              placeholder="* Ukrainian"
              className="casting__input"
              id="casting-input-instagram-link"
            />
            {/* error-mesage */}
            <span
              className="casting__error-mesage"
              id="casting-instagram-link-error-mesage"
            ></span>
          </div>

          {/* tatoo */}
          <div className="casting__field">
            <input
              name="tatoo"
              type="text"
              placeholder="* do you have any tatoo ?"
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
              min={20}
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

        {/* photo */}
        <div className="casting__field" id="casting__field-photo">
          <input
            name="photo"
            type="file"
            required
            value=''
            className="casting__input"
            id="casting-input-photo"
          />
          {/* error-mesage */}
          <span
            className="casting__error-mesage"
            id="casting-photo-error-mesage"
          ></span>
        </div>

        {/* comment */}
        <div className="casting__field" id="casting__field-comment">
          <input
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
  );
}

export default CastingApplication;
