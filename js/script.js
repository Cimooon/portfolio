(function () {
  'use strict';

  // ----- Rotating hero text (like "i am into ...") -----
  var rotateEl = document.getElementById('heroRotate');
  var phrases = ['Data Engineer', 'Python', 'Azure', 'PySpark', 'ETL Pipelines'];
  var index = 0;

  if (rotateEl) {
    function rotate() {
      rotateEl.style.opacity = '0';
      setTimeout(function () {
        index = (index + 1) % phrases.length;
        rotateEl.textContent = phrases[index];
        rotateEl.style.opacity = '1';
      }, 400);
    }
    rotateEl.style.transition = 'opacity 0.3s';
    setInterval(rotate, 2500);
  }

  // ----- Sidebar nav: set active link on scroll -----
  var sections = document.querySelectorAll('.section, .hero');
  var navLinks = document.querySelectorAll('.sidebar-link');

  function setActive() {
    var scrollY = window.pageYOffset;
    sections.forEach(function (section, i) {
      var top = section.offsetTop - 100;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (id && scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActive);
  setActive();

  // ----- Mobile sidebar toggle -----
  var toggle = document.querySelector('.sidebar-toggle');
  var nav = document.querySelector('.sidebar-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.setAttribute('aria-label', nav.classList.contains('is-open') ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });
  }
})();
