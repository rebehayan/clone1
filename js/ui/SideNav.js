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
    $btnDepth1.forEach((el) => {
      el.addEventListener("click", openMenu);
      el.addEventListener("click", gotoPage);
    });
  }

  function settings() {
    $Depth2.forEach((el) => {
      el.previousElementSibling.classList.add("has-depth");
    });
  }

  function openMenu(event) {
    let $Current = event.currentTarget;
    let $ul = $Current.nextElementSibling;

    removeClass();
    $Current.classList.add(config.activeClass);

    if ($ul) {
      slideToggle($ul);
      $ul.classList.add(config.activeClass);
      $ul.previousElementSibling.classList.add("open");
    }
  }

  function removeClass() {
    $Depth2.forEach((el) => {
      el.classList.remove(config.activeClass);
      el.style.cssText = "";
    });
    $btnDepth1.forEach((el) => {
      el.classList.remove(config.activeClass);
      el.classList.remove("open");
    });
  }

  // depth2 ul 높이계산
  function slideToggle(depth2) {
    let isheight = depth2.children.length * 40; // 40 = 개별높이
    depth2.style.cssText = `height:${isheight - 14}px`;
  }

  // 현재위치
  function currentNavigation() {
    const isLocation = location.pathname;
    const isID = isLocation.replace("/pages/", "").replace(".html", "");
    // console.log(isID);

    $btnDepth1.forEach((el) => {
      let text = el.getAttribute("data-href");

      if (isID == text) {
        const $ul = el.parentElement.parentElement;

        slideToggle($ul);
        el.classList.add("--current");
        el.parentElement.parentElement.classList.add(config.activeClass);
        el.parentElement.parentElement.previousElementSibling.classList.add(config.activeClass, "open");
      }
    });
  }

  // 페이지 이동
  function gotoPage(event) {
    let currentButton = event.currentTarget;
    let currentAttr = currentButton.getAttribute("data-href");

    if (currentAttr != null) {
      window.location = `/pages/${currentAttr}.html`;
      event.preventDefault();
    }
  }

  init();
}
