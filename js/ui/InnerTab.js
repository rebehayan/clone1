export function InnerTab(option = {}) {
  const config = {
    activeClass: "--active",
    ...option,
  };
  const $tab = document.querySelectorAll(".tab-type1");
  const $button = document.querySelectorAll(".tab-type1 a");

  function init() {
    // bindEvent();
    scrollMagicTab();
  }

  // 이벤트 바인드
  function bindEvent() {
    $button.forEach(function (el) {
      el.addEventListener("click", currentTab);
    });
  }

  // 현재탭 활성화
  function currentTab(event) {
    let isTab = event.currentTarget;

    removeClass();
    isTab.classList.add(config.activeClass);
  }

  // 클래스 삭제
  function removeClass() {
    $button.forEach(function (el) {
      el.classList.remove(config.activeClass);
    });
  }
  function scrollMagicTab() {
    if ($tab.length) {
      var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 1000 } });
      new ScrollMagic.Scene({ triggerElement: "#content1" }).setClassToggle("#tab1-1", "--active").addTo(controller);
      new ScrollMagic.Scene({ triggerElement: "#content2" }).setClassToggle("#tab1-2", "--active").addTo(controller);
      new ScrollMagic.Scene({ triggerElement: "#content3" }).setClassToggle("#tab1-3", "--active").addTo(controller);
      new ScrollMagic.Scene({ triggerElement: "#content4" }).setClassToggle("#tab1-4", "--active").addTo(controller);
    }
  }

  init();
}
