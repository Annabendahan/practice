function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.main-nav');
  if (navbar) { 
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('main-nav-white');
      } else {
        navbar.classList.remove('main-nav-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };



function initChangePictureOnScroll() {
  const picture = document.querySelector('.picture-color');
  if (picture) { 
    window.addEventListener('scroll', () => {
      if (window.scrollY >= picture.innerHeight) {
        picture.classList.add('.picture');
      } else {
        picture.classList.remove('.picture');
      }
    });
  }
}

export { initChangePictureOnScroll };