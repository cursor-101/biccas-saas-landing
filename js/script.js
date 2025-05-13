// 햄버거 메뉴 토글
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// 요금제 전환 (월별/연별)
const pricingSwitch = document.querySelector(".pricing-switch");
const switchOptions = pricingSwitch.querySelectorAll("span");

switchOptions.forEach(option => {
    option.addEventListener("click", () => {
        switchOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        header.style.padding = "1.5rem 0";
    } else {
        header.style.boxShadow = "none";
        header.style.padding = "3rem 0";
    }
});

// 페이지 로드 애니메이션
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease";
        hero.style.opacity = "1";
    }, 100);
});