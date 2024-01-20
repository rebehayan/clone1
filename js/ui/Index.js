export const IndexList = () => {
  const state = [
    {
      title: "IDE Setting",
      detail: "VS Code 기본 설정 및 확장도구 설치를 안내합니다.",
      url: "./pages/ide.html",
    },
    {
      title: "Git Setting",
      detail: "git 설치 및 설정방법, github 연결방법, gitlab 연결방법등을 안내합니다.",
      url: "./pages/git.html",
    },
  ];
  const state2 = [
    {
      title: "Folder Guide",
      detail: "프로젝트 진행을 위한 폴더 가이드",
      url: "./pages/folder.html",
    },
    {
      title: "Naming Guide",
      detail: "클래스, 이미지 네이밍 가이드",
      url: "./pages/naming.html",
    },
    {
      title: "HTML Guide",
      detail: "HTML코딩 규칙",
      url: "./pages/html.html",
    },
    {
      title: "CSS Guide",
      detail: "CSS표현 규칙",
      url: "./pages/css.html",
    },
    {
      title: "Sass Guide",
      detail: "Sass(SCSS) 가이드",
      url: "./pages/sass.html",
    },
    {
      title: "Javascript Guide",
      detail: "자바스크립트 가이드",
      url: "./pages/js.html",
    },
    {
      title: "React Guide",
      detail: "리액트 가이드",
      url: "./pages/react.html",
    },
    {
      title: "Accessibility",
      detail: "접근성 가이드",
      url: "./pages/a11y.html",
    },
    {
      title: "Cross Browser",
      detail: "호환성 가이드",
      url: "./pages/cross.html",
    },
  ];
  const state3 = [
    {
      title: "Color",
      detail: "색상 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Typograph",
      detail: "서체, 제목, 텍스트 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Align",
      detail: "정렬 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Layout",
      detail: "레이아웃 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Button",
      detail: "버튼 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Badge",
      detail: "뱃지 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Tab",
      detail: "탭메뉴 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Table",
      detail: "표 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Board",
      detail: "게시판 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Dialog",
      detail: "팝업, Alert, Confirm 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Carousel",
      detail: "슬라이드 정의",
      url: "./pages/cross.html",
    },
    {
      title: "Chart",
      detail: "그래프 정의",
      url: "./pages/cross.html",
    },
  ];

  const setEl = document.querySelector(".set1");
  const setEl2 = document.querySelector(".set2");
  const setEl3 = document.querySelector(".set3");

  setEl.innerHTML = /* html */ `
  ${state
    .map((item) => {
      return /* html */ `
      <li>
        <strong>${item.title}</strong>
        <p>${item.detail}</p>
        <a href="${item.url}" class="btn-more">View</a>
      </li>
    `;
    })
    .join("")}
  `;
  setEl2.innerHTML = /* html */ `
  ${state2
    .map((item) => {
      return /* html */ `
      <li>
        <strong>${item.title}</strong>
        <p>${item.detail}</p>
        <a href="${item.url}" class="btn-more">View</a>
      </li>
    `;
    })
    .join("")}
  `;
  setEl3.innerHTML = /* html */ `
  ${state3
    .map((item) => {
      return /* html */ `
      <li>
        <strong>${item.title}</strong>
        <p>${item.detail}</p>
        <a href="${item.url}" class="btn-more">View</a>
      </li>
    `;
    })
    .join("")}
  `;
};
