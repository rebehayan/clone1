export const footer = () => {
  const footerEl = document.createElement("footer");
  const containerEl = document.querySelector(".container");

  footerEl.innerHTML = /* html */ `
  <span class="txt-year"></span> &copy; FE Design System by HA SUNG PIL
`;

  containerEl.append(footerEl);

  footerEl.classList.add("footer");
};
