const getInputEl = document.querySelector("#font-size-control");
const getSpanEl = document.querySelector("#text");

getInputEl.addEventListener("input", (event) => {
  getSpanEl.style.fontSize = `${event.currentTarget.value}px`;
});
