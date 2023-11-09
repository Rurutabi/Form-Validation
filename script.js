'use strict';

class formValidation {
  email = document.querySelector('.email');
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

  constructor() {
    this._emailValidation();
    this._countryValidation();
    this._checkEmpty();
    this._zipCode();
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
      } else {
        this.email.setCustomValidity('');
      }

      this._checkEmpty();
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
