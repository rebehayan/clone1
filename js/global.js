import { SideNav } from "./ui/SideNav.js";
import { Toggle } from "./ui/Toggle.js";

//방법1
// SideNav();

// 방법2
Toggle({
  button: ".btn-menu",
  target: ".side-nav",
  targetClass: "--active",
});
