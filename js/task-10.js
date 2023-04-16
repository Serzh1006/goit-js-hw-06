function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  primaryBox: document.querySelector("#boxes"),
  inputValue: document.querySelector("#controls"),
  btnCreateCollections: document.querySelector("[data-create]"),
  btnDestroyCollections: document.querySelector("[data-destroy]"),
};

refs.btnCreateCollections.addEventListener("click", onClickCreateCollection);
refs.btnDestroyCollections.addEventListener("click", onClickDestroyCollection);
function onClickCreateCollection() {
  const collection = [];
  const counter = refs.inputValue.firstElementChild;
  let increment = 30;
  for (let i = 0; i < counter.value; i += 1) {
    const newElem = document.createElement("div");
    newElem.style.width = `${increment}px`;
    newElem.style.height = `${increment}px`;
    const colorDiv = getRandomHexColor();
    newElem.style.backgroundColor = colorDiv;
    collection.push(newElem);
    increment += 10;
  }
  refs.primaryBox.append(...collection);
}

function onClickDestroyCollection() {
  refs.primaryBox.innerHTML = "";
}
