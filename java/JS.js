window.addEventListener('DOMContentLoaded', (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  navbarShrink();

  document.addEventListener('scroll', navbarShrink);

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const portfolioBoxes = document.querySelectorAll('.portfolio-box');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  portfolioBoxes.forEach((box) => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = box.querySelector('img').src;
      const link = box.getAttribute('href'); // Use href attribute to get the link
      lightboxImg.src = imgSrc;
      lightboxImg.setAttribute('data-link', link);
      lightbox.classList.add('show');
    });
  });

  lightboxImg.addEventListener('click', () => {
    const link = lightboxImg.getAttribute('data-link');
    window.location.href = link;
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('show');
    }
  });
});

function openPage(url) {
  window.open(url, '_blank');
}
