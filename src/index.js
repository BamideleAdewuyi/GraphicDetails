import "./style.css";
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const postcode = document.getElementById("postcode");
const postcodeError = document.querySelector("#postcode + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.querySelector(
  "#passwordConfirm + span.error",
);

// Checking functions
function checkPostcode(postCode) {
  const constraint = new RegExp(
    "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})",
  );
  const result = constraint.test(postCode);
  return result;
}

function checkEmail(email) {
  const constraint = new RegExp(
    '(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
  );
  const result = constraint.test(email);
  return result;
}

function checkPassword(password) {
  const constraint = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
  );
  const result = constraint.test(password);
  return result;
}

function checkPasswordConfirm(passwordConfirm) {
  const password = document.getElementById("password").value;
  const result = passwordConfirm == password;
  return result;
}

function showError(error) {
  const errors = {
    invalidPostcode: "Enter a valid postcode.",
    invalidEmail: "Enter a valid email",
    valueMissing: "Cannot be blank",
  };

  return errors[error];
}

// Event handling
postcode.addEventListener("input", (e) => {
  if (checkPostcode(postcode.value)) {
    postcodeError.textContent = "";
  } else {
    postcodeError.textContent = showError("invalidPostcode");
  }
});

email.addEventListener("input", (e) => {
  if (checkEmail(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = showError("invalidEmail");
  }
});

password.addEventListener("input", (e) => {
  if (checkPassword(password.value)) {
    passwordError.textContent = "";
  } else {
    passwordError.textContent =
      "Password must have at least eight characters, with at least one letter, one number and one special character";
  }
});

passwordConfirm.addEventListener("input", (e) => {
  if (checkPasswordConfirm(passwordConfirm.value)) {
    passwordConfirmError.textContent = "";
  } else {
    passwordConfirmError.textContent = "Does not match password";
  }
});

form.addEventListener("submit", (e) => {
  if (checkEmail(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = showError("invalidEmail");
    e.preventDefault();
  }
  if (checkPostcode(postcode.value)) {
    postcodeError.textContent = "";
  } else {
    postcodeError.textContent = showError("invalidPostcode");
    e.preventDefault();
  }
  if (checkPassword(password.value)) {
    passwordError.textContent = "";
  } else {
    passwordError.textContent =
      "Password must have at least eight characters, with at least one letter, one number and one special character";
    e.preventDefault();
  }
  if (checkPasswordConfirm(passwordConfirm.value)) {
    passwordConfirmError.textContent = "";
  } else {
    passwordConfirmError.textContent = "Does not match password";
    e.preventDefault();
  }
  if (email.validity.valueMissing) {
    emailError.textContent = showError("valueMissing");
  }

  if (country.validity.valueMissing) {
    countryError.textContent = showError("valueMissing");
  } else {
    countryError.textContent = "";
  }

  if (postcode.validity.valueMissing) {
    postcodeError.textContent = showError("valueMissing");
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = showError("valueMissing");
  }

  if (passwordConfirm.validity.valueMissing) {
    passwordConfirmError.textContent = showError("valueMissing");
  }
});
