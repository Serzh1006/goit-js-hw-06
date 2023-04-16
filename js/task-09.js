function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const valueColorInSpan = document.querySelector(".color");

const onClickChangeColorBody = () => {
  const getbackgColor = getRandomHexColor();
  document.body.style.backgroundColor = getbackgColor;
  valueColorInSpan.textContent = getbackgColor;
};

btnChangeColor.addEventListener("click", onClickChangeColorBody);
