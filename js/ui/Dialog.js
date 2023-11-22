export function Dialog(id, option = {}) {
  const config = {
    dialog: `[data-dialog="${id}"]`,
    open: `[data-dialog-open="${id}"]`,
    close: `[data-dialog-close="${id}"]`,
    ...option,
  };
  const $dialog = document.querySelector(config.dialog);
  const $btnOpen = document.querySelector(config.open);
  const $btnClose = document.querySelector(config.close);

  $btnOpen.addEventListener("click", () => {
    $dialog.show();
  });

  $btnClose.addEventListener("click", () => {
    $dialog.close();
  });
}
