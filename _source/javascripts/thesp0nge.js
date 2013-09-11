$(document).ready(function () {
  setInterval(rotateImage, 7000);
  var images = new Array('/images/originals/myself.png', '/images/originals/logo_1.jpg', '/images/originals/logo_2.jpg', '/images/originals/logo_3.jpg', '/images/originals/logo_5.jpg', '/images/originals/logo_6.jpg', '/images/originals/logo_7.jpg', '/images/originals/logo_8.jpg', '/images/originals/logo_9.jpg', '/images/originals/logo_10.jpg', '/images/originals/logo_11.jpg');
  var index = 1;
 
  function rotateImage() {
    $('.logo').fadeOut('slow', function () {
      $(this).attr('src', images[index]);
      $(this).fadeIn('slow', function () {
        if (index == images.length - 1) {
          index = 0;
        } else {
          index++;
        }
      });
    });
  }
});
