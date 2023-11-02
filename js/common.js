$(function() {

jQuery(document).ready(function(){
  jQuery(window).scroll(function() {    
    
    if (jQuery(window).scrollTop() >= 150) {
      jQuery("#load").css("opacity", "0");
    } else {
      jQuery("#load").css("opacity", "1");
    }
  });
});

AOS.init();

$('#load').on('click', function () {
      $('html, body').animate({
        scrollTop: $('.sec-2').offset().top
      }, 500);
    });


function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };
  
  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

$('#load').on('click', function () {
      $('html, body').animate({
        scrollTop: $('.sec-2').offset().top
      }, 500);
    });

$('#form').validate({
    rules: {
      email: {
        required: true,
        minlength: 6,
        maxlength: 100,
      },
      name: {
        required: true,
        minlength: 2,
        maxlength: 16,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 15,
      },
      textaria: {
        required: true,
        minlength: 1,
      },
    },
    messages: {
      name: {
        required: "Please provide your full Name",
      },
      email: {
        required: "Please provide your email",
        email: "Please check the email format"
      },
    },

    submitHandler: function(form) {
      $(form).submit(function(e) {
        e.preventDefault();
      });
    }

  });

$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});

})

