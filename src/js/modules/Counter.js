export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const init = () => {
    render();
    registerEventHandler();
  };

  const increaseValue = () => {
    const value = document.querySelector(".count-display");
    if (value.value >= 12) return;
    value.value = Number(value.value) + 1;
  };
  const decreaseValue = () => {
    const value = document.querySelector(".count-display");
    if (value.value <= 8) return;
    value.value = Number(value.value) - 1;
  };

  const registerEventHandler = () => {
    const plusButton = document.querySelector(".plus-button");
    const minusButton = document.querySelector(".minus-button");

    plusButton.addEventListener("click", increaseValue);
    minusButton.addEventListener("click", decreaseValue);
  };

  init();
}
