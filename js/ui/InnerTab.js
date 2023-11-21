export function InnerTab(option = {}) {
  const config = {
    activeClass: "--active",
    ...option,
  };
  const $button = document.querySelectorAll(".tab-type1 a");

  function init() {
    // bindEvent();
    scrollMagicTab();
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
  function scrollMagicTab() {
    var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 1000 } });
    new ScrollMagic.Scene({ triggerElement: "#content1" }).setClassToggle("#tab1-1", "--active").addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#content2" }).setClassToggle("#tab1-2", "--active").addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#content3" }).setClassToggle("#tab1-3", "--active").addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#content4" }).setClassToggle("#tab1-4", "--active").addTo(controller);
  }

  init();
}
