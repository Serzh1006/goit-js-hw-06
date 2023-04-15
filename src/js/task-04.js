const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const valueInWindow = document.querySelector("#value");
let counterValue = 0;

const incrValueFun = () => {
  counterValue += 1;
  valueInWindow.textContent = counterValue;
};

const decrValueFun = () => {
  counterValue -= 1;
  valueInWindow.textContent = counterValue;
};
btnIncrement.addEventListener("click", incrValueFun);
btnDecrement.addEventListener("click", decrValueFun);
