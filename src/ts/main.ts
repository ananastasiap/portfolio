import '../scss/style.scss';

import { popups, showTitle } from './modules/index.ts';

window.addEventListener('DOMContentLoaded', () => {
  showTitle('.section');
  popups('.title', '.popup', '.close');
});


