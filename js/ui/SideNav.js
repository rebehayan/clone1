import { Toggle } from "./Toggle.js";

export function SideNav() {
  const $btnMenu = document.querySelector(".btn-menu");
  const $sideNav = document.querySelector(".side-nav");

  // 방법1
  // $btnMenu.addEventListener("click", openNav);
  // function openNav() {
  //   if ($sideNav.classList.contains("--active")) {
  //     $sideNav.classList.remove("--active");
  //   } else {
  //     $sideNav.classList.add("--active");
  //   }
  // }

  // 방법2
  $btnMenu.addEventListener("click", Toggle);
  Toggle({
    button: ".btn-menu",
    target: ".-sidenav",
    targetClass: "--active",
  });
}
