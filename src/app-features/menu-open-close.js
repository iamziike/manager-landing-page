const menuBar = document.querySelector('.mobile-nav-controls');

const navbarLinks = document.querySelector('.navbar__links');

const openImgWrapper = document.querySelector('.open-wrapper');

const closeImgWrapper = document.querySelector('.close-wrapper');

const toggleMenuImage = (openImgWrapper, closeImgWrapper) => {
  openImgWrapper.classList.toggle('no-display');
  closeImgWrapper.classList.toggle('no-display');
};

let isNavBarShowing = false;

const showLinks = () => {
  if (isNavBarShowing) navbarLinks.style.left = '120%';
  else navbarLinks.style.left = '0%';

  isNavBarShowing = !isNavBarShowing;
};

export const enableMenuInteraction = () => {
  menuBar.addEventListener('click', () => {
    toggleMenuImage(openImgWrapper, closeImgWrapper);
    showLinks();
  });
};
