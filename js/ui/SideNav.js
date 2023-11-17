export function SideNav() {
  const $btnMenu = document.querySelector(".btn-menu");
  const $sideNav = document.querySelector(".side-nav");

  $btnMenu.addEventListener("click", openNav);
  function openNav() {
    if ($sideNav.classList.contains("--active")) {
      $sideNav.classList.remove("--active");
    } else {
      $sideNav.classList.add("--active");
    }
  }
}
