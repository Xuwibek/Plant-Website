/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach(link => {
    link.addEventListener('click', ()=> {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollup = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll" , scrollup);


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (this.scrollY >= 150) {
        header.classList.add("border-b", "border-yellow-500");
    } else {
        header.classList.remove("border-b", "border-yellow-500");
    }
}
window.addEventListener("scroll" , scrollHeader);


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,  
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  });


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link'); // Class selektor to‘g‘rilandi

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 60) { // this.scrollY o‘rniga window.scrollY
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove('active');
        if(item.href.includes(current)) {
            item.classList.add('active');
        }
    });
};

window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
});

// home
sr.reveal(`.home_data,  .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right`);
sr.reveal(`.home_img`, {delay: 500, scale: 0.5});

// services
sr.reveal(`.service_card, .popular_card`, {delay: 100, interval: 100}); 

// about
sr.reveal(`.about__leaf `, {delay: 1000, origin: "right"});
sr.reveal(`.about__item__1-content, .about__item__2-img`, { origin: "right"});
sr.reveal(`.about__item__2-content, .about__item__1-img`, { origin: "left"});

sr.reveal(`.review-leaf, .footer__floral`, {delay: 100, origin: "left"});
