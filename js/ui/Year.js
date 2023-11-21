export function Year(option = {}) {
  const config = {
    ...option,
  };

  const $year = document.querySelector(".txt-year");
  $year.textContent = new Date().getFullYear();
}
