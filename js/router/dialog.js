export const dialog = () => {
  const dialog = document.createElement("div");
  const body = document.body;

  dialog.innerHTML = /* html */ `
    <dialog class="dialog-service" data-dialog="dialog1">
      <div class="dialog-service__header">
        <h2>Author Apps</h2>
        <button class="dialog-service__close" data-dialog-close="dialog1"><span class="material-symbols-outlined">close</span></button>
      </div>
      <ul class="dialog-service__list">
        <li><a href=""><img src="/images/ico_drive.png" alt="">Drive</a></li>
        <li><a href=""><img src="/images/ico_git.png" alt="">Github</a></li>
        <li><a href=""><img src="/images/ico_gmail.png" alt="">Gmail</a></li>
        <li><a href=""><img src="/images/ico_kakao.png" alt="">OpenChat</a></li>
        <li><a href=""><img src="/images/ico_behance.png" alt="">Behance</a></li>
        <li><a href=""><img src="/images/ico_lms.png" alt="">LMS</a></li>
        <li><a href=""><img src="/images/ico_velog.png" alt="">Blog</a></li>
        <li><a href=""><img src="/images/ico_calendar.png" alt="">Calendar</a></li>
      </ul>
    </dialog>

    <dialog class="dialog-settings" data-dialog="dialog2">
      <div class="dialog-settings__header">
        <h2><span class="material-symbols-outlined">cognition</span>FE UI Settings</h2>
        <button class="dialog-settings__close" data-dialog-close="dialog2"><span class="material-symbols-outlined">close</span></button>
      </div>
      <ul class="dialog-settings__list">
        <li>
          <label class="btn-toggle">
            <strong>Dark / Light Mode</strong>
            <input type="checkbox" id="checkTheme">
          </label>
        </li>
      </ul>
    </dialog>
  `;

  body.append(dialog);
};
