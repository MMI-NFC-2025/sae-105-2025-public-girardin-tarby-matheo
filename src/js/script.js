const targetDate = new Date("Jun 6, 2026 14:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const h12 = document.querySelector(".timer");

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    h12.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s` ;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").textContent = "C'est maintenant 🎉";
    }
}, 1000);
