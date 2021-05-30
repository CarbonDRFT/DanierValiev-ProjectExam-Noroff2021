const form = document.querySelector(".contact__form");
const errorName = document.querySelector(".error__name");
const errorEmail = document.querySelector(".error__email");
const errorSubject = document.querySelector(".error__subject");
const errorMessage = document.querySelector(".error__message");
const submitContact = document.querySelector(".submit__contact");

submitContact.onclick = function (e) {
  e.preventDefault();

  const name = document.querySelector(".fullname").value.trim();
  const email = document.querySelector(".email").value.trim();
  const subject = document.querySelector(".subject").value.trim();
  const message = document.querySelector(".message").value.trim();

  //Validations

  let nameValidation = true;
  let emailValidation = true;
  let subjectValidation = true;
  let messageValidation = true;

  if (name.length < 6) {
    errorName.classList.add("show");
    nameValidation = false;
  } else {
    errorName.classList.remove("show");
  }

  //validate email

  if (validateEmail(email) === false) {
    errorEmail.classList.add("show");
    emailValidation = false;
  } else {
    errorEmail.classList.remove("show");
  }

  function validateEmail(emailToAdd) {
    const emailExpression =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailExpression.test(emailToAdd);

    return isEmailValid;
  }

  //validate subject

  if (subject.length < 16) {
    errorSubject.classList.add("show");
    subjectValidation = false;
  } else {
    errorSubject.classList.remove("show");
  }

  //textbox validation

  if (message.length < 26) {
    errorMessage.classList.add("show");
    messageValidation = false;
  } else {
    errorMessage.classList.remove("show");
  }

  if (
    nameValidation &&
    emailValidation &&
    subjectValidation &&
    messageValidation
  ) {
    let data = new FormData(form);
    console.log(data.get("name"));
    console.log(data.get("email"));
    console.log(data.get("subject"));
    console.log(data.get("message"));
  }
};
