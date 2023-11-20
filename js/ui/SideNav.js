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
    currentNavigation();
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

  function currentNavigation() {
    let url = location.href; //현재 url
    let urlinfo = new URL(url); //url 구조분석
    let counturl = urlinfo.pathname; // 경로부분 추출
    let count = counturl.indexOf("/", 2); // 두번째 단어(/)부터 추출
    let isURL = counturl.slice(count + 1, -5); // 현재파일명 추출

    $btnDepth1.forEach((el) => {
      let text = el.getAttribute("data-href");

      if (isURL.match(text)) {
        el.classList.add("--current");
        el.parentElement.parentElement.classList.add("--active");
        el.parentElement.parentElement.previousElementSibling.classList.add("--active", "open");
      }
    });
  }

  init();
}
