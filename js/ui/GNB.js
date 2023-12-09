export function GNB() {
  const navData = [
    {
      text: "Settings",
      url: "",
      class: "",
      depth: [
        {
          text: "IDE Setting",
          url: "",
        },
        {
          text: "Git Setting",
          url: "",
        },
      ],
    },
    {
      text: "Coding Convention",
      url: "",
      class: "",
      depth: [
        {
          text: "1",
          url: "",
          class: "",
        },
      ],
    },
    {
      text: "Component Guide",
      url: "",
      class: "",
      depth: [
        {
          text: "1",
          url: "",
          class: "",
        },
      ],
    },
    {
      text: "Project Status",
      url: "",
      class: "",
    },
  ];

  const $gnb = document.querySelector(".gnb");
  for (let i = 0; i < navData.length; i += i) {
    navData[i]?.depth ? isDepth(i) : noneDepth(i);
  }

  function isDepth(i) {
    $gnb.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <button role="link" data-href="${navData[i].url}" class="has-depth ${navData[i].class}">${navData[i].text}</button>
      </li>
      `
    );
    for (let idx = 0; idx < navData[i].depth.length; idx += idx) {
      // isDepth2(idx, i);
    }
  }
  function isDepth2(idx, i) {
    const $ul = document.createElement("ul");
    $gnb.children[i].append($ul).insertAdjacentHTML(
      "afterend",
      `
      <li>
        <button role="link" data-href="${navData[i].url}">${navData[i].text}</button>
      </li>
    `
    );
  }

  function noneDepth(i) {
    $gnb.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <button role="link" data-href="${navData[i].url}" class="${navData[i].class}">${navData[i].text}</button>
      </li>
      `
    );
    console.log("현재 깊이가 없습니다.");
  }
}
