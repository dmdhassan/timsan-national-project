let navBar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-link");

let backToTop = document.querySelector(".back-to-top");
let current = document.querySelector(".active");

let navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((navLink) => {
     
     navLink.addEventListener("click", function() {
          
          navCollapse.classList.remove('show');
          navLink.classList.add('active');
          current.classList.remove("active");
          current = navLink
     });
});



function scrollNavbar() {
     if(document.documentElement.scrollTop > 150) {
          navBar.classList.add("scroll")
     } else {
          navBar.classList.remove("scroll")
     };

     if(document.documentElement.scrollTop > 600) {
          backToTop.classList.add("scroll")
     } else {
          backToTop.classList.remove("scroll")
     };
     
}

var slideUp = document.querySelectorAll(".slide-up");
var slideLeft = document.querySelectorAll(".slide-left");

var slideRight = document.querySelectorAll(".slide-right");
var deviceHeight = window.innerHeight;

function animateOnScroll() {
     for (var i = 0; i < slideUp.length; i++) {
     var elementTop = slideUp[i].getBoundingClientRect().top;
     
     if (elementTop <= deviceHeight - 100) {
          slideUp[i].classList.add("scroll");
     } else {
          slideUp[i].classList.remove("scroll");
     }
}

for (var i = 0; i < slideLeft.length; i++) {
     var elementTop = slideLeft[i].getBoundingClientRect().top;
     
     if (elementTop <= deviceHeight - 100) {
          slideLeft[i].classList.add("scroll");
     } else {
          // slideLeft[i].classList.remove("scroll");
     }
}

for (var i = 0; i < slideRight.length; i++) {
     var elementTop = slideRight[i].getBoundingClientRect().top;
     
     if (elementTop <= deviceHeight - 100) {
          slideRight[i].classList.add("scroll");
     } else {
          // slideRight[i].classList.remove("scroll");
     }
}

}



window.addEventListener("scroll", () => {
     scrollNavbar();
     animateOnScroll()
});


