'use strict';

class formValidation {
  email = document.querySelector('.email');
  allInput = document.querySelectorAll('input');
  form = document.querySelector('form');

  constructor() {
    this._emailValidation();
    this._emptyEmail();
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

      this._emptyEmail();
    });
  }

  _emptyEmail() {
    if (this.email.validity.valueMissing) {
      this.email.setCustomValidity('Please fill in Email');
    } else {
      console.log('Email is not empty');
    }
  }
}

const newForm = new formValidation();
