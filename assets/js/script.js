/* Navbar toggle */
$("#menu").click(function () {
  $(this).toggleClass("fa-times");
  $(".navbar").toggleClass("nav-toggle");
});

$(window).on("scroll load", function () {
  $("#menu").removeClass("fa-times");
  $(".navbar").removeClass("nav-toggle");

  /* scroll top button */
  if ($(window).scrollTop() > 60) {
    $("#scroll-top").addClass("active");
  } else {
    $("#scroll-top").removeClass("active");
  }
});

$("#scroll-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

/* Typed.js - rotating text in hero */
if (typeof Typed !== "undefined") {
  var typed = new Typed(".typing-text", {
    strings: ["Data Engineer", "Python", "Azure", "PySpark", "ETL Pipelines"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
  });
}

/* Particles.js */
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#2506ad" },
      shape: { type: "circle" },
      opacity: { value: 0.4, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#2506ad", opacity: 0.3, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, out_modes: { default: "bounce" } }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

/* Vanilla Tilt - optional, for .tilt elements */
if (typeof VanillaTilt !== "undefined") {
  document.querySelectorAll(".tilt").forEach(function (el) {
    VanillaTilt.init(el, { max: 15, speed: 400, glare: false });
  });
}

/* Active nav link on scroll */
var sections = $("section, .home");
$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop() + 100;
  sections.each(function () {
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();
    var id = $(this).attr("id");
    if (id && scrollPos >= top && scrollPos < bottom) {
      $(".navbar ul li a").removeClass("active");
      $('.navbar ul li a[href="#' + id + '"]').addClass("active");
    }
  });
});

/* Contact form - open mailto on submit */
$("#contact-form").on("submit", function (e) {
  e.preventDefault();
  var name = $('input[name="name"]').val();
  var email = $('input[name="email"]').val();
  var message = $('textarea[name="message"]').val();
  var subject = "Portfolio contact from " + name;
  var mailto = "mailto:ibissou.mohamed@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message + "\n\n---\nFrom: " + name + " <" + email + ">");
  window.location.href = mailto;
});
