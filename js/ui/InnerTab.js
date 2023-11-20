export function InnerTab(option = {}) {
  const config = {
    activeClass: "--active",
    ...option,
  };
  const $button = document.querySelectorAll(".tab-type1 a");

  function init() {
    bindEvent();
  }

  function bindEvent() {
    $button.forEach(function (el) {
      el.addEventListener("click", currentTab);
    });
  }

  function currentTab(event) {
    let isTab = event.currentTarget;

    removeClass();
    isTab.classList.add(config.activeClass);
  }

  function removeClass() {
    $button.forEach(function (el) {
      el.classList.remove(config.activeClass);
    });
  }

  init();
}
