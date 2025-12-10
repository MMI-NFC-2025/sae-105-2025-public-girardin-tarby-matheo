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
const header = document.querySelector('.header')

toggle.addEventListener('click', () => {
    header.classList.toggle('close');
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});

closeBtn.addEventListener('click', () => {
    header.classList.toggle('close');
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});