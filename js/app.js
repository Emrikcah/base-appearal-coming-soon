const form = document.querySelector(".input-wrapper");
const input = document.querySelector(".input");

function checkEmail(e) {
  e.preventDefault();
  const inputValue = input.value;
  if (validateEmail(inputValue)) {
    //if true dont add the error class
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
}

// validateEmail() taken from stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", checkEmail);
