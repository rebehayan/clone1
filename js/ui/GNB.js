export function GNB(option = {}) {
  const config = {
    ...option,
  };

  const $button = document.querySelectorAll(".side-nav button");

  function init() {
    bindEvent();
  }

  function bindEvent() {
    $button.forEach(function (el) {
      el.addEventListener("click", gotoPage);
    });
  }

  function gotoPage(event) {
    let currentButton = event.currentTarget;
    let currentAttr = currentButton.getAttribute("data-href");

    if (currentAttr !== null) {
      window.location = `/pages/${currentAttr}.html`;
      event.preventDefault();
    }

    // if ($current)
  }

  init();
}
