import '../scss/style.scss';

import { popups, showTitle } from './modules/index.ts';

window.addEventListener('DOMContentLoaded', () => {
  showTitle('.section');
  popups('.title__about', '.about-modal__container', '.close__about');
  popups('.title__skills', '.skills-modal__container', '.close__skills');
  popups('.title__projects', '.projects-modal__container', '.close__projects');
  popups('.title__contacts', '.contacts-modal__container', '.close__contacts');
});


