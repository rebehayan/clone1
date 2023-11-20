export function Fullscreen(option = {}) {
  const config = {
    ...option,
  };

  const $button = document.querySelector(".btn-fullscreen");

  function init() {
    bindEvent();
  }

  function bindEvent() {
    $button.addEventListener("click", toggleScreen);
  }

  function toggleScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  init();
}
