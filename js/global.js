import { GNB } from "./ui/GNB.js";
import { ToggleNav } from "./ui/ToggleNav.js";
import { Toggle } from "./ui/Toggle.js";
import { AuthorApps } from "./ui/AuthorApps.js";
import { Search } from "./ui/Search.js";
import { ScrollHeader } from "./ui/ScrollHeader.js";
import { SideNav } from "./ui/SideNav.js";
import { Fullscreen } from "./ui/Fullscreen.js";
import { InnerTab } from "./ui/InnerTab.js";

GNB();

// 사이드메뉴제어
//방법1
// ToggleNav();

// 방법2
Toggle({
  button: ".btn-menu",
  target: ".side-nav",
  targetClass: "--active",
});

AuthorApps(); // app팝업
Search(); // 문서검색
ScrollHeader(); // 헤더고정
SideNav(); // 사이드메뉴
Fullscreen(); //전체창
InnerTab(); // 내부링크탭
