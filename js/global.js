import { ToggleNav } from "./ui/ToggleNav.js";
import { Toggle } from "./ui/Toggle.js";
import { Dialog } from "./ui/Dialog.js";
import { Search } from "./ui/Search.js";
import { ScrollHeader } from "./ui/ScrollHeader.js";
import { SideNav } from "./ui/SideNav.js";
import { Fullscreen } from "./ui/Fullscreen.js";
import { InnerTab } from "./ui/InnerTab.js";
import { Year } from "./ui/Year.js";
import { Theme } from "./ui/Theme.js";
// 사이드메뉴제어
//방법1
// ToggleNav();

// 방법2
Toggle({
  button: ".btn-menu",
  target: ".side-nav",
  targetClass: "--active",
});

// 팝업
Dialog("dialog1");
Dialog("dialog2");

Search(); // 문서검색
ScrollHeader(); // 헤더고정
SideNav(); // 사이드메뉴
Fullscreen(); //전체창
InnerTab(); // 내부링크탭
Year(); // 푸터 년도
Theme(); //테마
