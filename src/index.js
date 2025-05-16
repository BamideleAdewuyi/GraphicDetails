import "./style.css";
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error")
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const postcode = document.getElementById("postcode");
const postcodeError = document.querySelector("#postcode + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error")
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.querySelector("#passwordConfirm + span.error");

//Use RegEx for postcode and passwords
// Postcode regex: ([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})
// All: Value missing
// email: validity valid
// postcode: does not match format
// password, email: too short
// password confirm: does not match

function checkPostcode(postCode) {
    const constraint = new RegExp("([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})")

    const iffley = "OX4 4DP"

    const result = constraint.test(postCode)
    return result;
}

function showError(error) {
    const errors = {
        "invalidPostcode": "Enter a valid postcode.",
        "invalidEmail" : "Enter a valid email"
    }

    return errors[error];
}

postcode.addEventListener("input", (e) => {
    if (checkPostcode(postcode.value)) {
        postcodeError.textContent = ""
    } else {
        postcodeError.textContent = showError("invalidPostcode")
    }
})