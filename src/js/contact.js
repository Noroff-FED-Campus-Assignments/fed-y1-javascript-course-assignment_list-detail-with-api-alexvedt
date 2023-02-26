const nameEl = document.querySelector("#nameField");
const formEl = document.querySelector("#formField");
const emailEl = document.querySelector("#emailField");
const subjectEL = document.querySelector("#subjectField");
const messageEl = document.querySelector("#messageField");
const buttonEl = document.querySelector("#submitButton");
const addressEl = document.querySelector("#addressField");

const regexName = /^[a-zA-Z\s]{2,}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSubject = /^[a-zA-Z0-9\s]{10,}$/;
const regexAddress = /^[a-zA-Z0-9\s]{25,}$/;

const errorName = document.querySelector("#error-name");
const errorEmail = document.querySelector("#error-email");
const errorSubject = document.querySelector("#error-subject");
const errorAddress = document.querySelector("#error-address");

let nameElIsValid = false;
let emailElIsValid = false;
let subjectElIsValid = false;
let messageElIsValid = false;
let addressElIsValid = false;

/*if i remove the console log under i get underline from line 21>24. This does not make sense for me because i have used the variables down in the code,*/
console.log(
  nameElIsValid,
  emailElIsValid,
  subjectElIsValid,
  messageElIsValid,
  addressElIsValid
);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  function validateForm() {
    if (regexName.test(nameEl.value) && nameEl.value.trim().length >= 2) {
      nameEl.classList.add("is-valid");
      nameEl.classList.remove("is-invalid");
      nameElIsValid = true;
      errorName.innerHTML = "";
    } else {
      nameEl.classList.add("is-invalid");
      nameEl.classList.remove("is-valid");
      nameElIsValid = false;
      errorName.innerHTML = `<p class="errormessage">Your name must be more than two letters and only characters A-Z</p>`;
    }
    //

    if (regexEmail.test(emailEl.value)) {
      emailEl.classList.add("is-valid");
      emailEl.classList.remove("is-invalid");
      emailElIsValid = true;
      errorEmail.innerHTML = "";
    } else {
      emailEl.classList.add("is-invalid");
      emailEl.classList.remove("is-valid");
      emailElIsValid = false;
      errorEmail.innerHTML = `<p class="errormessage">Please enter a correct email</p>`;
    }

    if (regexSubject.test(subjectEL.value)) {
      subjectEL.classList.add("is-valid");
      subjectEL.classList.remove("is-invalid");
      subjectElIsValid = true;
      errorSubject.innerHTML = "";
    } else {
      subjectEL.classList.add("is-invalid");
      subjectEL.classList.remove("is-valid");
      subjectElIsValid = false;
      errorSubject.innerHTML = `<p class="errormessage">Subject need to be minimum 10 characters</p>`;
    }

    if (regexAddress.test(addressEl.value)) {
      addressEl.classList.add("is-valid");
      addressEl.classList.remove("is-invalid");
      addressElIsValid = true;
      errorAddress.innerHTML = "";
    } else {
      addressEl.classList.add("is-invalid");
      addressEl.classList.remove("is-valid");
      addressElIsValid = false;
      errorAddress.innerHTML = `<p class="errormessage">Address need to be minimum 25 characters</p>`;
    }

    if (
      !nameElIsValid ||
      !regexEmail.test(emailEl.value) ||
      !regexSubject.test(subjectEL.value) ||
      !regexAddress.test(addressEl.value) ||
      messageEl.value.trim().length < 10
    ) {
      buttonEl.disabled = false;
      alert("Please fill out the form correctly");
    } else {
      buttonEl.disabled = false;
      buttonEl.textContent = "Submit form :))";
      alert("Thank you for your message");
      location.reload();
    }
  }

  validateForm();
});
