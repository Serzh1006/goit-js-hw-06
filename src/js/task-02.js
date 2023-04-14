const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newlistIngredients = ingredients.map((elem) => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  liEl.classList.add("item");
  return liEl;
});
console.log(newlistIngredients);
const listEl = document.querySelector("#ingredients");
listEl.prepend(...newlistIngredients);
