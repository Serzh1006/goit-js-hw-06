const valueSpan = document.querySelector("#name-output");
const inputValue = document.querySelector("#name-input");

inputValue.addEventListener("input", (event) => {
  valueSpan.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    valueSpan.textContent = "Anonymous";
  }
});
