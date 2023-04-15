const inputValue = document.querySelector("#validation-input");
const lengthString = document.querySelector('[data-length="6"]');
const getNumberfromString = Number(lengthString.dataset.length);

inputValue.addEventListener("blur", (event) => {
  if (inputValue.classList.contains("valid")) {
    inputValue.classList.remove("valid");
  } else {
    inputValue.classList.remove("invalid");
  }
  const filterString = event.currentTarget.value.trim();
  if (getNumberfromString === filterString.length) {
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.add("invalid");
  }
});
