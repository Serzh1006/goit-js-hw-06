const primarylistEl = document.querySelector("#categories");
console.log("Number of categories: ", primarylistEl.children.length);
const childLiItem = document.querySelectorAll(".item");

childLiItem.forEach((elem) => {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("elements: ", elem.lastElementChild.children.length);
});
