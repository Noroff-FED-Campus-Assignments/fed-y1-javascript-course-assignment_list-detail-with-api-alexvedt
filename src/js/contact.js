const nameEl = document.querySelector("#nameField");
const formEl = document.querySelector("#formField");
const emailEl = document.querySelector("#emailField");
const subjectEL = document.querySelector("#subjectField");
const messageEl = document.querySelector("#messageField");
const buttonEl = document.querySelector("#submitButton");
const addressEl = document.querySelector("#addressField");

const regexName = /^[a-zA-Z\s]{2,}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSubject = /^[a-zA-Z0-9]{10,}$/;
const regexAddress = /^[a-zA-Z0-9]{25,}$/;

let nameElIsValid = false;

formEl.addEventListener("keyup", (event) => {
  event.preventDefault();
  console.log("start of code for validate form");

  function validateForm() {
    if (regexName.test(nameEl.value) && nameEl.value.trim().length >= 2) {
      nameEl.classList.add("is-valid");
      nameEl.classList.remove("is-invalid");
      nameElIsValid = true;
      console.log("hurra");
    } else {
      nameEl.classList.add("is-invalid");
      nameEl.classList.remove("is-valid");
      nameElIsValid = false;
      console.log("nope");
    }

    if (
      !nameElIsValid ||
      !regexEmail.test(emailEl.value) ||
      !regexSubject.test(subjectEL.value) ||
      !regexAddress.test(addressEl.value) ||
      messageEl.value.trim().length < 10
    ) {
      buttonEl.disabled = true;
      buttonEl.textContent = "the form is incorrect";

      //lag farge ellernoe så det er åpenbart for gamle og svaksynte at knappen er fucket og ikke kan trykkes på
    } else {
      buttonEl.disabled = false;
      buttonEl.textContent = "Submit form :))";
    }
  }

  if (nameElIsValid) {
    console.log("goidkjent og submit");
  }
  validateForm();

  console.log("ikke noe problem iform ennå");
});
