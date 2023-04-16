const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  if (formEl.elements[0].value === "" || formEl.elements[1].value === "") {
    alert("Заполните все поля");
  } else {
    const emailName = event.currentTarget.elements.email.name;
    const passwordName = event.currentTarget.elements.password.name;
    const emailValue = event.currentTarget.email.value;
    const passwordValue = event.currentTarget.password.value;
    const registrationDataUser = {
      [emailName]: emailValue,
      [passwordName]: passwordValue,
    };
    console.log(registrationDataUser);
    event.currentTarget.reset();
  }
};

formEl.addEventListener("submit", onFormSubmit);
