
import { errorMesages, inputValidClass, inputInValidClass } from './../utils/constants';

export class FormValidator {
  constructor(config, formElement) {
    // классы и селекторы
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;

    this._activeButtonClass = config.activeButtonClass;
    this._inactiveButtonClass = config.inactiveButtonClass;

    this._buttonClass = config.buttonClass;
    this._errorClass = config.errorClass;

    // форма
    this.form = formElement;
    // кнопка сабмита
    this._button = this.form.querySelector(this._submitButtonSelector);
    // массив input-ов
    this._inputList = Array.from(this.form.querySelectorAll(this._inputSelector));
  }

  enableValidation() {
    this.form.addEventListener('submit', (event) => this._handleFormSubmit(event, this));
    this.form.addEventListener('input', (event) => this._handleFormInput(event, this));
  }

  _handleFormSubmit(event, formObj) {
    const isValid = formObj.form.checkValidity();
    if (isValid) {
      formObj.setSubmitButtonState();
    }
  }

  _handleFormInput(event, formObj) {
    const input = event.target;
    formObj.setSubmitButtonState();
    formObj.setCustomError(input);
    formObj.showError(input);
  }

  _hideError(input) {
    const span = input.nextElementSibling;
    input.classList.remove(inputInValidClass);
    span.textContent = '';
  }

  resetValidation() {
    this.setSubmitButtonState(false);

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });

  }

  showError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
  }

  setCustomError(input) {
    const validity = input.validity;
    input.classList.add(inputInValidClass);
    input.setCustomValidity(Error = '');

    if (validity.tooShort) {
      input.setCustomValidity(Error = errorMesages.tooShort);
    }
    // в реальной жизни браузер не дает написать больше текста, чем максимальное количество
    if (validity.tooLong) {
      input.setCustomValidity(Error = errorMesages.tooLong);
    }

    if (validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity(Error = errorMesages.typeMismatchUrl);
    }

    if (validity.valueMissing) {
      input.setCustomValidity(Error = errorMesages.valueMissing);
    }

    if (validity.rangeUnderflow) {
      input.setCustomValidity(Error = errorMesages.rangeUnderflow);
    }

    if (validity.rangeOverflow) {
      input.setCustomValidity(Error = errorMesages.rangeOverflow);
    }

    if (validity.valid) {
      input.classList.remove(inputInValidClass);
      input.classList.add(inputValidClass);
    } else {
      input.classList.add(inputInValidClass);
      input.classList.remove(inputValidClass);
    }
  }

  //включить или выключить кнопку отправки формы
  setSubmitButtonState(isValid = this.form.checkValidity()) {

    if (isValid) {
      this._button.removeAttribute('disabled', false);
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.classList.add(this._activeButtonClass);
      this._button.classList.add(this._buttonClass);
    } else {
      this._button.setAttribute('disabled', true);
      this._button.classList.add(this._inactiveButtonClass);
      this._button.classList.remove(this._activeButtonClass);
      this._button.classList.remove(this._buttonClass);
    }
  }

}
