const nameEl = document.querySelector("#nameField");
const emailEl = document.querySelector("#emailField");
const subjectEl = document.querySelector("#subjectField");
const addressEl = document.querySelector("#addressField");

const disallowedCharacters = {
  name: /[^a-zA-Z\s]/,
  email: /[^a-zA-Z0-9._@-]/,
  subject: /[^a-zA-Z0-9\s]/,
  address: /[^a-zA-Z0-9\s]/,
};

const regexPatterns = {
  name: /^[a-zA-Z\s]{2,}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  subject: /^[a-zA-Z0-9\s]{10,}$/,
  address: /^[a-zA-Z0-9\s]{25,}$/,
};

const errorElements = {
  name: document.querySelector("#error-name"),
  email: document.querySelector("#error-email"),
  subject: document.querySelector("#error-subject"),
  address: document.querySelector("#error-address"),
};

const validateInput = (field, value) => {
  const disallowedChars = disallowedCharacters[field];
  if (disallowedChars.test(value)) {
    errorElements[
      field
    ].textContent = `Whoops, your ${field} cannot include "${disallowedChars.source}"`;
    return false;
  }

  const regexPattern = regexPatterns[field];
  if (regexPattern.test(value)) {
    errorElements[field].textContent = "";
    return true;
  }

  errorElements[field].textContent = `Please enter a valid ${field}`;
  return false;
};

nameEl.addEventListener("keyup", (event) => {
  const isValid = validateInput("name", event.target.value);
  if (isValid) {
    nameEl.classList.add("is-valid");
    nameEl.classList.remove("is-invalid");
  } else {
    nameEl.classList.add("is-invalid");
    nameEl.classList.remove("is-valid");
  }
});

emailEl.addEventListener("keyup", (event) => {
  const isValid = validateInput("email", event.target.value);
  if (isValid) {
    emailEl.classList.add("is-valid");
    emailEl.classList.remove("is-invalid");
  } else {
    emailEl.classList.add("is-invalid");
    emailEl.classList.remove("is-valid");
  }
});

subjectEl.addEventListener("keyup", (event) => {
  const isValid = validateInput("subject", event.target.value);
  if (isValid) {
    subjectEl.classList.add("is-valid");
    subjectEl.classList.remove("is-invalid");
  } else {
    subjectEl.classList.add("is-invalid");
    subjectEl.classList.remove("is-valid");
  }
});

addressEl.addEventListener("keyup", (event) => {
  const isValid = validateInput("address", event.target.value);
  if (isValid) {
    addressEl.classList.add("is-valid");
    addressEl.classList.remove("is-invalid");
  } else {
    addressEl.classList.add("is-invalid");
    addressEl.classList.remove("is-valid");
  }
});
