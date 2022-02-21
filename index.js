var navBar = document.querySelector(".navbar");
var navlinks = document.querySelectorAll(".nav-link");

var backToTop = document.querySelector(".back-to-top");


for (var i = 0; i < navlinks.length; i++) {
     
     navlinks[i].addEventListener("click", function() {
          var current = document.querySelector(".active");
          current.classList.remove("active");
          this.classList.add("active");
     
     });
}


function scrollNavbar() {
     if(document.documentElement.scrollTop > 50) {
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


var section = document.querySelectorAll("section");

function inViewPort(element) {

     let bounding = element.getBoundingClientRect();

          if (bounding.top <= 0 && bounding.bottom >= 0){
               var current = document.querySelector(".active");
               // current.classList.remove("active");

          } else {

          };

     
}

window.addEventListener("scroll", () => {
     scrollNavbar();
     
     
     
     for (i = 0; i < section.length; i++) {
          inViewPort(section[i])
     }
     
});



