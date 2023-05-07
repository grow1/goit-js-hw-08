import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

saveInputData();

form.addEventListener('input', throttle(onDataInput, 500));
form.addEventListener('submit', onFormSubmit);

function onDataInput() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill out all the fields! :)');
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}

function saveInputData() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
