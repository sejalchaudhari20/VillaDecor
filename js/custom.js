$(window).on("scroll", function () {
  if ($(".site-header").length) {
    stickyMenu($('.site-header .navigation'), "sticky-on");
  }
});

// Function for clone an element for sticky menu
function cloneNavForSticyMenu($ele, $newElmClass) {
  $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
}

// clone home style 1 navigation for sticky menu
if ($('.site-header .navigation').length) {
  cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
}

var lastScrollTop = '';

function stickyMenu($targetMenu, $toggleClass) {
  var st = $(window).scrollTop();
  var mainMenuTop = $('.site-header .navigation');

  if ($(window).scrollTop() > 100) {
    $targetMenu.addClass($toggleClass);

  } else {
    $targetMenu.removeClass($toggleClass);
  }

  lastScrollTop = st;
}

var btn = $('#scroll');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
(function ($) {
  $(document).ready(function () {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);

