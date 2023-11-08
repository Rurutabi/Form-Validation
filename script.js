'use strict';

class formValidation {
  email = document.querySelector('.email');
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
    this._checkEmpty();
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
