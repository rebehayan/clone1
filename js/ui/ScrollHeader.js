export function ScrollHeader(option = {}) {
  const config = {
    ...option,
  };

  const $body = document.querySelector("body");

  function bindEvent() {
    window.addEventListener("scroll", _.throttle(headerFixed, 300));
  }
  function headerFixed() {
    if (window.scrollY > 100) {
      $body.classList.add("--fixed");
    } else {
      $body.classList.remove("--fixed");
    }
  }

  bindEvent();
}
