export function Theme(option = {}) {
  const config = {
    ...option,
  };
  const $check = document.querySelector("#checkTheme");
  const $root = document.querySelector("body");

  $check.addEventListener("click", () => {
    if ($check.checked) {
      $root.classList.add("dark");
    } else {
      $root.classList.remove("dark");
    }
  });
}
