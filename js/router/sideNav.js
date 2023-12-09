export const sideNav = () => {
  const sideEl = document.createElement("nav");
  const containerEl = document.querySelector(".container");

  sideEl.innerHTML = /* html */ `
    <ul>
      <li>
        <button><span class="material-symbols-outlined">Settings_applications</span>Settings</button>
        <ul class="depth2">
          <li><button role="link" data-href="ide"><i class="material-symbols-outlined">edit_document</i>IDE Setting</button></li>
          <li><button role="link" data-href="git"><i class="material-symbols-outlined">hub</i>Git Setting</button></li>
        </ul>
      </li>
      <li>
        <button><span class="material-symbols-outlined">code</span>Coding Convention</button>
        <ul class="depth2">
          <li><button role="link" data-href="folder"><i class="material-symbols-outlined">create_new_folder</i>Folder
              Guide</button></li>
          <li><button role="link" data-href="naming"><i class="material-symbols-outlined">fingerprint</i>Naming
              Guide</button></li>
          <li><button role="link" data-href="html"><i class="material-symbols-outlined">html</i>HTML Guide</button>
          </li>
          <li><button role="link" data-href="css"><i class="material-symbols-outlined">css</i>CSS Guide</button></li>
          <li><button role="link" data-href="sass"><i class="material-symbols-outlined">style</i>Sass Guide</button></li>
          <li><button role="link" data-href="js"><i class="material-symbols-outlined">javascript</i>Javascript Guide</button></li>
          <li><button role="link" data-href="react"><i class="material-symbols-outlined">code_blocks</i>React Guide</button></li>
          <li><button role="link" data-href="a11y"><i class="material-symbols-outlined">settings_Accessibility</i>Accessibility</button></li>
          <li><button role="link" data-href="cross"><i class="material-symbols-outlined">crossword</i>Cross Browser</button></li>
        </ul>
      </li>
      <li>
        <button><span class="material-symbols-outlined">package_2</span>Component Guide</button>
        <ul class="depth2">
          <li><button role="link" data-href="color"><i class="material-symbols-outlined">colorize</i>Color</button>
          </li>
          <li><button role="link" data-href="typograph"><i class="material-symbols-outlined">text_fields</i>Typograph</button></li>
          <li><button role="link" data-href="align"><i class="material-symbols-outlined">align_horizontal_left</i>Align</button></li>
          <li><button role="link" data-href="layout"><i class="material-symbols-outlined">responsive_layout</i>Layout</button></li>
          <li><button role="link" data-href="button"><i class="material-symbols-outlined">toggle_on</i>Button</button></li>
          <li><button role="link" data-href="badge"><i class="material-symbols-outlined">add_reaction</i>Badge</button></li>
          <li><button role="link" data-href="form"><i class="material-symbols-outlined">select_check_box</i>Form</button></li>
          <li><button role="link" data-href="tab"><i class="material-symbols-outlined">tab</i>Tab</button></li>
          <li><button role="link" data-href="table"><i class="material-symbols-outlined">table</i>Table</button></li>
          <li><button role="link" data-href="board"><i class="material-symbols-outlined">table_view</i>Board</button></li>
          <li><button role="link" data-href="dialog"><i class="material-symbols-outlined">Dialogs</i>Dialog</button></li>
          <li><button role="link" data-href="carousel"><i class="material-symbols-outlined">view_Carousel</i>Carousel</button></li>
          <li><button role="link" data-href="chart"><i class="material-symbols-outlined">insert_Chart</i>Chart</button></li>
        </ul>
      </li>
      <li><button><span class="material-symbols-outlined">list_alt</span>Project Status</button></li>
    </ul>
`;

  containerEl.prepend(sideEl);
  sideEl.classList.add("side-nav");
};
