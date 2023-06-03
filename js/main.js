const mobileNav = () => {
  $(document).ready(function () {
    var togglebtn = document.querySelector('.navbar-toggler');
    var mobileSidebar = document.querySelector('.mobile__menu');

    if (togglebtn && mobileSidebar) {
      togglebtn.addEventListener('click', () => {
        mobileSidebar.classList.toggle('open');
      });
    }
  });
};
mobileNav();

var onePageClick = function () {
    console.log('clcikded')
  $(document).on('click', '.drame-nav a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, 'href');

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 70,
      },
      500,
      function () {
        window.location.hash = href;
      }
    );
  });
};

onePageClick();
