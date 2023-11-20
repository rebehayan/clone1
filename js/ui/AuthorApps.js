export function AuthorApps(option = {}) {
  const config = {
    ...option,
  };
  const $dialog = document.querySelector(".dialog-service");
  const $openDialog = document.querySelector(".btn-app");
  const $closeDialog = document.querySelector(".dialog-service__close");

  $openDialog.addEventListener("click", () => {
    $dialog.show();
  });

  $closeDialog.addEventListener("click", () => {
    $dialog.close();
  });
}
