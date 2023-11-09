'use strict';

class formValidation {
  email = document.querySelector('.email');
  password = document.querySelector('.password');
  conPassword = document.querySelector('.confirm-password');
  country = document.querySelector('.country');
  zipCode = document.querySelector('.zipcode');
  allInput = document.querySelectorAll('input');
  form = document.querySelector('form');
  asianCountries = [
    'Japan',
    'China',
    'India',
    'South Korea',
    'Thailand',
    'Vietnam',
    'Indonesia',
    'Philippines',
    'Singapore',
    'Malaysia',
    'Pakistan',
    'Bangladesh',
    'Sri Lanka',
    'Nepal',
    'Saudi Arabia',
    'United Arab Emirates',
    'Turkey',
    'Iran',
    'Iraq',
    'Israel',
    'Jordan',
    'Lebanon',
    'Oman',
    'Qatar',
    'Kuwait',
    'Bahrain',
  ];
  upperPattern = /[A-Z]/;
  numberPattern = /[0-9]/;

  constructor() {
    this._emailValidation();
    this._countryValidation();
    this._checkEmpty();
    this._zipCode();
    this._passwordValidation();
    this._confirmValidation();
  }

  _confirmValidation() {
    this.conPassword.addEventListener('input', e => {
      if (this.conPassword.value !== this.password.value) {
        this.conPassword.setCustomValidity('Password do not match');
      } else {
        this.conPassword.setCustomValidity('');
      }
    });
  }

  _passwordValidation() {
    this.password.addEventListener('input', e => {
      if (
        this.password.value.length < 8 ||
        !this.upperPattern.test(this.password.value) ||
        !this.numberPattern.test(this.password.value)
      ) {
        this.password.setCustomValidity(
          'Password must be at least 8 characters, 1 Uppercase and 1 Number'
        );
      } else {
        this.password.setCustomValidity('');
      }
    });
  }

  _zipCode() {
    this.zipCode.addEventListener('input', event => {
      if (this.zipCode.value.length > 8) {
        this.zipCode.setCustomValidity('Maximum range is 8');
      } else if (this.zipCode.value.length < 4) {
        this.zipCode.setCustomValidity('Minimum range is 4');
      } else {
        this.zipCode.setCustomValidity('');
      }
    });
  }
  //Email
  _emailValidation() {
    this.email.addEventListener('input', event => {
      if (this.email.validity.typeMismatch) {
        this.email.setCustomValidity(
          'Please enter your email: turtle@gmail.com'
        );
      } else if (this.email.validity.valueMissing) {
        this.email.setCustomValidity('Please fill in the blank');
      } else {
        this.email.setCustomValidity('');
      }
    });
  }

  //Country
  _countryValidation() {
    this.country.addEventListener('input', event => {
      if (!this.asianCountries.includes(this.country.value)) {
        this.country.setCustomValidity('Pick one of the Asian countries');
      } else {
        this.country.setCustomValidity('');
      }
    });
  }

  _checkEmpty() {
    for (const element of this.allInput) {
      if (element.validity.valueMissing) {
        element.setCustomValidity('Please fill in the blank');
      } else {
        element.setCustomValidity('');
      }
    }
  }
}

const newForm = new formValidation();
