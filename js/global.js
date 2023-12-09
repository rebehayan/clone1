import { Dialog, Toggle, TreeFolder, SideNav, Search, ScrollHeader, InnerTab, Year, Theme, Fullscreen } from "./ui.js";
import { header } from "./router/header.js";
import { footer } from "./router/footer.js";
import { sideNav } from "./router/sideNav.js";
import { dialog } from "./router/dialog.js";

header();
footer();
sideNav();
dialog();

Toggle({
  // 사이드메뉴제어
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
TreeFolder(); // sass 폴더구조
