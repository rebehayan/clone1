export function SideNav(option = {}) {
  const config = {
    activeClass: "--active",
    ...option,
  };
  const $btnDepth1 = document.querySelectorAll(".side-nav button");
  const $Depth2 = document.querySelectorAll(".side-nav li ul");

  function init() {
    settings();
    bindEvent();
  }

  function bindEvent() {
    $btnDepth1.forEach(function (el) {
      el.addEventListener("click", openMenu);
    });
  }

  function settings() {
    $Depth2.forEach(function (el) {
      el.previousElementSibling.classList.add("has-depth");
    });
  }

  function openMenu(event) {
    let $Current = event.currentTarget;
    let $ul = $Current.nextElementSibling;

    removeClass();
    $Current.classList.add(config.activeClass);

    if ($ul) {
      $ul.classList.add(config.activeClass);
      $ul.previousElementSibling.classList.add("open");
    }
  }

  function removeClass() {
    $Depth2.forEach(function (el) {
      el.classList.remove(config.activeClass);
    });
    $btnDepth1.forEach(function (el) {
      el.classList.remove(config.activeClass);
      el.classList.remove("open");
    });
  }

  init();
}
