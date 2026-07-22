// ==============================
// Sticky Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ==============================
// Accordion
// ==============================

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

    item.addEventListener("click", () => {

        accordionItems.forEach(acc => {
            if (acc !== item) {
                acc.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});


// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter-box h2");

let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter-section");

    if (
        !started &&
        window.scrollY >
        counterSection.offsetTop - window.innerHeight + 100
    ) {

        started = true;

        counters.forEach(counter => {

            const target = +counter.innerText;

            let count = 0;

            const update = () => {

                count++;

                counter.innerText = count;

                if (count < target) {
                    requestAnimationFrame(update);
                }

            };

            update();

        });

    }

});


// ==============================
// Property Card Hover
// ==============================

const cards = document.querySelectorAll(".property-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
        }

    });

    if (valid) {

        alert("Message Sent Successfully!");

        form.reset();

        inputs.forEach(input => {
            input.style.border = "none";
        });

    }

});


// ==============================
// Smooth Scroll
// ==============================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==============================
// Hero Image Slider
// ==============================

const hero = document.querySelector(".hero");

const images = [
    "heading image.png",
    "2ndimage.png",
    "room.png"
];

let current = 0;

function changeHero() {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    hero.style.backgroundImage = `url('${images[current]}')`;

}

setInterval(changeHero, 4000);


// ==============================
// Hero Left & Right Arrow
// ==============================

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

rightArrow.addEventListener("click", () => {

    current++;

    if (current >= images.length) current = 0;

    hero.style.backgroundImage = `url('${images[current]}')`;

});

leftArrow.addEventListener("click", () => {

    current--;

    if (current < 0) current = images.length - 1;

    hero.style.backgroundImage = `url('${images[current]}')`;

});
const menuToggle=document.querySelector(".menu-toggle");
const navMenu=document.querySelector("#navMenu");

menuToggle.addEventListener("click",function(){

navMenu.classList.toggle("active");

});