export function Search(option = {}) {
  const config = {
    ...option,
  };

  const $btn = document.querySelector(".btn-search");
  const $searchBar = document.querySelector(".search-bar");
  const $searchInput = document.querySelector(".search-bar input");

  function bindEvent() {
    document.addEventListener("keydown", shortCut);
    $btn.addEventListener("click", searchToggle);
    $searchInput.addEventListener("blur", searchHide);
  }

  function shortCut(e) {
    if (e.keyCode == 80 && e.ctrlKey) {
      e.preventDefault();
      searchToggle();
    }
  }

  function searchToggle() {
    if ($searchBar.classList.contains("--active")) {
      searchHide();
    } else {
      searchShow();
    }
  }

  function searchShow() {
    $searchBar.classList.add("--active");
    $searchInput.focus();
  }
  function searchHide() {
    $searchInput.value = "";
    $searchBar.classList.remove("--active");
    $btn.focus();
  }

  bindEvent();
}
