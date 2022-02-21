var navBar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".nav-link");

var backToTop = document.querySelector(".back-to-top");

var current = document.querySelector(".active");

navLinks.forEach((navLink) => {
     navLink.addEventListener("click", function() {
          current.classList.remove("active");
          navLink.classList.add("active");
     })
})


function scrollNavbar() {
     if(document.documentElement.scrollTop > 500) {
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


var sections = document.querySelectorAll("section");

sections.forEach((section) => {
     const sectionTop = section.offsetTop;

     if(scrollY >= sectionTop) {
          current = section.getAttribute("id");
          console.log(section)
     }
})



window.addEventListener("scroll", () => {
     scrollNavbar();

     sections.forEach((section) => {
     const sectionTop = section.offsetTop;

     if(scrollY >= sectionTop) {
          current = section.getAttribute("id");
     }


     });

     
});



