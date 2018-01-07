
//HEIGHT = 100% ON HTML/BODY WAS FUCKING IT ALL UP: browser cannot calculate scroll on html with height 100%
// Removed it, didn't seem to affect anything else


window.onscroll = function() {
  revealBtn();
  revealHowItWorks();
};
var howItWorks1 = document.querySelector('.f1');
var howItWorks2 = document.querySelector('.f2');
var howItWorks3 = document.querySelector('.f3');
var goTopBtn = document.querySelector('.back-to-top-btn');

function revealHowItWorks(){
  if (window.pageYOffset >= 620) {
    //show (and transition with CSS) button
    howItWorks1.classList.add("fadeInDown", "animate", "one");
    howItWorks2.classList.add("fadeInDown", "animate", "two");
    howItWorks3.classList.add("fadeInDown", "animate", "three");
    }
}

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
///////////////////**************


