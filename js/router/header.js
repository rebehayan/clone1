export const header = () => {
  const headerEl = document.createElement("header");
  const body = document.body;

  headerEl.innerHTML = /* html */ `
    <h1 class="logo"><a href="/"><span class="material-symbols-outlined">cognition</span>Project Design System Guide</a>
    </h1>
    <div class="search-bar">
      <span class="material-symbols-outlined">search</span>
      <input type="search" placeholder="Ctrl + P 검색">
    </div>
    <nav class="utility">
      <ul>
        <li><button class="btn-search"><abbr title="검색" class="material-symbols-outlined">search</abbr></button></li>
        <li><button class="btn-fullscreen"><abbr title="전체창보기" class="material-symbols-outlined">Expand</abbr></button>
        </li>
        <li>
          <button class="btn-app" data-dialog-open="dialog1"><abbr title="다른서비스" class="material-symbols-outlined">Apps</abbr></button>
        </li>
        <li><button class="btn-menu"><abbr title="메뉴숨기기" class="material-symbols-outlined">exit_to_app</abbr></button>
        </li>
        <li><button class="btn-setting" data-dialog-open="dialog2"><abbr title="사이트설정" class="material-symbols-outlined">settings</abbr></button>
        </li>
      </ul>
    </nav>
`;

  body.prepend(headerEl);
  headerEl.classList.add("header");
};
