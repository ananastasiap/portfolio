export const showTitle = (hoverSelector: string) => {
  const titlesToShow = document.querySelectorAll<HTMLElement>(hoverSelector);

  titlesToShow.forEach((titleToShow: HTMLElement) => {
    const wrapper = titleToShow.querySelector<HTMLElement>('.wrapper');
    const title = wrapper?.querySelector<HTMLElement>('.title');

    if (!wrapper || !title) {
      return;
    }

    titleToShow.addEventListener('mouseover', () => {
      wrapper.classList.remove('visually-hidden');
      wrapper.classList.add('u-animation-to-top');
      title.classList.add('u-animation-to-top');
    });

    titleToShow.addEventListener('mouseout', () => {
      wrapper.classList.add('visually-hidden');
      wrapper.classList.remove('u-animation-to-top');
      title.classList.remove('u-animation-to-top');
    });
  });
};
