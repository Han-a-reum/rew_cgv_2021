$(document).ready(function(){       
  $(".return-top").hide();
  $(function () {                 
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) { 
              $('.return-top').fadeIn();
          } else {
              $('.return-top').fadeOut();
          }
      });              
      $('.return-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  }); 
});