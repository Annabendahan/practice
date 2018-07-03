function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.main-nav');
  if (navbar) { 
    window.addEventListener('scroll', () => {
      if (window.scrollY >= (1/2 * window.innerHeight)) {
        navbar.classList.add('main-nav-white');
      } else {
        navbar.classList.remove('main-nav-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };



