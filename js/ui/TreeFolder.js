export function TreeFolder(option = {}) {
  const config = {
    ...option,
  };
  const $li = document.querySelectorAll(".folder-tree li");

  $li.forEach((el) => {
    let txt = el.childNodes[0].textContent;

    txt.match("scss") ? isFile(el) : isFolder(el);

    function isFile(el) {
      el.classList.add("scss");
    }
    function isFolder(el) {
      el.classList.add("folder");
    }
  });
}
