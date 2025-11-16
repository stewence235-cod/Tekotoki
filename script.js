// === LOADING SCREEN ===
window.onload = () => {
    document.getElementById("loading").style.display = "none";
};

// === DARK / LIGHT MODE ===
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// === POPUP NOTIFICATION ===
function showPopup(msg) {
    const popup = document.getElementById("popup");
    popup.textContent = msg;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
});

// === FORM CONTACT ===
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    showPopup("Pesan berhasil dikirim!");
});

// === SCROLL TO TOP ===
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});