export function Toggle(option = {}) {
  const config = {
    button: "button",
    target: "div",
    targetClass: "--active",
    ...option,
  };
  const $toggleBtn = document.querySelector(config.button);
  const $toggleTarget = document.querySelector(config.target);

  function bindEvent() {
    $toggleBtn.addEventListener("click", openTarget);
  }

  function openTarget() {
    if ($toggleTarget.classList.contains(config.targetClass)) {
      $toggleTarget.classList.remove(config.targetClass);
    } else {
      $toggleTarget.classList.add(config.targetClass);
    }
  }

  bindEvent();
}
