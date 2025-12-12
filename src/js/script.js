const targetDate = new Date("Jun 6, 2026 14:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const h2 = document.querySelector(".timer");

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    h2.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s` ;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").textContent = "C'est maintenant 🎉";
    }
}, 1000);



const toggle = document.getElementById('menuButton') || document.querySelector('.menu-button');
const closeBtn = document.getElementById('menuClose');
const nav = document.getElementById('mainNav') || document.querySelector('.menu');
const page = document.body;
const header = document.querySelector('.header');

function toggleMenu() {
    if (!nav || !toggle) return;
    const isOpen = nav.classList.toggle('open');
    page.classList.toggle('no-scroll', isOpen);
    document.documentElement.classList.toggle('no-scroll', isOpen);
    if (header) header.classList.toggle('close', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

if (toggle) {
    toggle.addEventListener('click', toggleMenu);
}

if (closeBtn) {
    closeBtn.addEventListener('click', toggleMenu);
}



const carousel = document.querySelector("div.carousel__container");
const prevButton = document.querySelector("button.carousel__button--prev");
const nextButton = document.querySelector("button.carousel__button--next");

if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -330, behavior: "smooth"
        });
    });
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: 330, behavior: "smooth"
        });
    });
}

const premierItem = document.querySelector(".carousel__item");
scrollAmount = premierItem.clientWidth;



const questionButtons = document.querySelectorAll(".questionbtn");

questionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const questionItem = button.closest(".questionitem");
        const isActive = questionItem.classList.contains("active");

        document.querySelectorAll(".question__item.active").forEach(item => {
            if (item !== questionItem) {
                item.classList.remove("active");
            }
        });

        questionItem.classList.toggle("active");
    });
});