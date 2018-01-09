
//HEIGHT = 100% ON HTML/BODY WAS FUCKING IT ALL UP: browser cannot calculate scroll on html with height 100%
// Removed it, didn't seem to affect anything else


window.onscroll = function() {
  revealBtn()
};

var goTopBtn = document.querySelector('.back-to-top-btn');

function revealBtn() {
  // if window has been scrolled 500 (I think px?)
  if (window.pageYOffset >= 500) {
    //show (and transition with CSS) button
    goTopBtn.classList.add("back-to-top-btn-show");
    }
  //if not
  if (window.pageYOffset < 499) {
    //keep hidden -- also allows fade out transitions through same CSS
    goTopBtn.classList.remove("back-to-top-btn-show");
    }
}

function topFunction() {
    //if page is scrolled
    if (window.pageYOffset > 0) {
      //scroll x by 0, scroll y by -40 (I don't know what unit -40 is)
      window.scrollBy(0, -40);
      //use setTimeout to call function and set interval at which it's called to smooth the scroll: higher number goes slower
      setTimeout(topFunction, 5);
    }
}

//////////How it Works Scroll Animation (needed jquery only for this)

$(window).scroll(function() {
  $('.hidden').each(function() {
    var bottom_of_object = $(this).offset().top + 50;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(this).addClass("animateHiW");
      $(this).addClass("fadeInDownImages");
    }
  })
})
