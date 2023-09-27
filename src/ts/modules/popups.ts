export const popups = (selectorTriggerPopup: string, modalContainer: string, selectorClose: string) => {
  const triggersPopup = document.querySelectorAll<HTMLElement>(selectorTriggerPopup);
  const popups = document.querySelectorAll<HTMLDialogElement>(modalContainer);
  const closeButton = document.querySelector<HTMLButtonElement>(selectorClose);

  triggersPopup.forEach(triggerPopup => {
    triggerPopup.addEventListener('click', () => {
      popups.forEach(popup => {
        popup.showModal();
      });
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      console.log('closed');
      popups.forEach(popup => {
        popup.close();
      });
    });
  }
};