// Button
const submitCta = document.querySelector(".submit__cta");

// All error messages
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const subjectError = document.querySelector(".subjectError");
const messageError = document.querySelector(".messageError");

submitCta.onclick = (event) => {
  try {
    event.preventDefault();

    // All inputs
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (formLength(name, 5)) {
      nameError.classList.add("hide");
      nameError.classList.remove("show");
    } else {
      nameError.classList.add("show");
      nameError.classList.remove("hide");
    }

    if (validateEmail(email)) {
      emailError.classList.add("hide");
      emailError.classList.remove("show");
    } else {
      emailError.classList.add("show");
      emailError.classList.remove("hide");
    }

    if (formLength(subject, 15)) {
      subjectError.classList.add("hide");
      subjectError.classList.remove("show");
    } else {
      subjectError.classList.add("show");
      subjectError.classList.remove("hide");
    }

    if (formLength(message, 25)) {
      messageError.classList.add("hide");
      messageError.classList.remove("show");
    } else {
      messageError.classList.add("show");
      messageError.classList.remove("hide");
    }

    function validateEmail(email) {
      const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const isEmailValid = emailExpression.test(email);
      return isEmailValid;
    }

    function formLength(element, length) {
      if (element.length > length) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlert(
      "An error occured, please contact The Modern Apartment",
      "danger"
    );

    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
};
