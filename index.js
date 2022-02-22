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



var sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {
     scrollNavbar();

     // scrollSpy()


     
});


