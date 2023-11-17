import { ToggleNav } from "./ui/ToggleNav.js";
import { Toggle } from "./ui/Toggle.js";

//방법1
// ToggleNav();

// 방법2
Toggle({
  button: ".btn-menu",
  target: ".side-nav",
  targetClass: "--active",
});
