(function () {
  const switcher = document.querySelector(".lang-switcher");
  if (!switcher) return;

  const toggle = switcher.querySelector(".lang-switcher__toggle");
  const menu = switcher.querySelector(".lang-switcher__menu");
  const label = switcher.querySelector(".lang-switcher__label");
  const options = switcher.querySelectorAll(".lang-switcher__option");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;
      const text = option.textContent.trim();

      options.forEach((opt) => {
        opt.classList.remove("lang-switcher__option--active");
        opt.setAttribute("aria-selected", "false");
      });

      option.classList.add("lang-switcher__option--active");
      option.setAttribute("aria-selected", "true");

      const flag = option.querySelector(".lang-switcher__flag");
      const toggleFlag = toggle.querySelector(".lang-switcher__flag");
      toggleFlag.className = flag.className;

      label.textContent = text;
      document.documentElement.lang = lang;

      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });

  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });
})();

const translations = {
  ru: {
    about: "О нас",
    catalog: "Каталог",
    contacts: "Контакты",
    heroText:
      "<strong>HOLZFFORMA</strong> — надёжность, проверенная делом. Высокое качество, прочные материалы и безупречная производительность делают эти пилы отличным выбором как для профессионалов, так и для тех, кто ценит надёжный инструмент.",
    learnMore: "Узнать подробнее",

    contactTitle: "Хотите связаться с нами?",
    whyUs: "Почему выбирают именно нас",
    delivery: "Доставка 1–3 дня",
    shipping: "Отгрузка 1–3 дня",
    replacement: "Замена при браке",
    premium: "Премиальное качество",
    prices: "Низкие цены",

    ourContacts: "Наши контакты",
    phone: "Номер телефона:",
    writeWhatsapp: "Напишите нам в WhatsApp —",
    whatsappDescription:
      "ответим быстро, проконсультируем<br>и поможем подобрать подходящую<br>пилу.",
    priceMessage: "Прайс и наши образцы отправим вам<br>в ЛС или WhatsApp",
    write: "Написать",

    supplierTitle: "Мы — ваш надёжный поставщик",
    supplierText:
      "Продаём высококачественные ленточные пилы для резки древесины и металла.<br><br>В наличии широкий ассортимент размеров и типов зубьев. Полотна изготовлены из прочной инструментальной стали, обеспечивают ровный рез, высокую износостойкость и долгий срок службы.",

    catalogTitle: "Каталог",
    tableName: "Название",
    tableSize: "Размер",
    tablePrice: "Цена",

    reviewsTitle: "Отзывы о нас",

    review1:
      "Купил пилы для своей столярной мастерской. Использую ежедневно. Рез получается ровный, полотно долго остаётся острым. Качество полностью оправдано!",
    review2:
      "Заказывал полотна для производства. Приятно удивило качество стали и срок службы. Даже при частой работе пилы показывают себя отлично. Буду обязательно брать ещё.",
    review3:
      "Долго выбирал ленточные пилы и остановился на этих. Использую для резки металла и дерева. Полотна прочные, режут аккуратно. Цена полностью соответствует качеству.",

    author1: "Андрей Ковалёв",
    author2: "Виктор Соколов",
    author3: "Николай Захаров",

    footerDescription:
      "Профессиональные ленточные пилы для дерева и металла. Надежность, качество и быстрая доставка по всей России.",

    navigation: "Навигация",
    home: "Главная",
    reviews: "Отзывы",
    footerContacts: "Контакты",

    whatsapp: "WhatsApp",
    telegram: "Telegram",
    workingHours: "Ежедневно 09:00–20:00",

    copyright: "© 2026 HOLZFÄLLER. Все права защищены.",
    quality: "Мы — про качество.",
  },

  en: {
    about: "About",
    catalog: "Catalog",
    contacts: "Contacts",
    heroText:
      "<strong>HOLZFFORMA</strong> — reliability proven in practice. High quality, durable materials and excellent performance make these saws the perfect choice for professionals and everyone who values reliable tools.",
    learnMore: "Learn More",

    contactTitle: "Want to contact us?",
    whyUs: "Why choose us",
    delivery: "Delivery in 1–3 days",
    shipping: "Shipping in 1–3 days",
    replacement: "Replacement for defects",
    premium: "Premium quality",
    prices: "Low prices",

    ourContacts: "Our contacts",
    phone: "Phone:",
    writeWhatsapp: "Message us on WhatsApp —",
    whatsappDescription:
      "We'll reply quickly,<br>answer your questions<br>and help you choose the right saw.",
    priceMessage: "We'll send our price list and samples<br>via DM or WhatsApp",
    write: "Write to us",

    supplierTitle: "Your reliable supplier",
    supplierText:
      "We supply premium-quality band saw blades for wood and metal cutting.<br><br>Available in a wide range of sizes and tooth types. Our blades are made of durable tool steel, ensuring precise cuts, high wear resistance and long service life.",

    catalogTitle: "Catalog",
    tableName: "Name",
    tableSize: "Size",
    tablePrice: "Price",

    reviewsTitle: "Customer Reviews",

    review1:
      "I bought these blades for my woodworking shop. I use them every day. The cut is smooth and the blade stays sharp for a long time. Excellent quality!",
    review2:
      "Ordered blades for production. I was impressed by the steel quality and durability. Even with constant use they perform perfectly. Definitely buying again.",
    review3:
      "After comparing many band saw blades, I chose these. I use them for wood and metal cutting. Strong, precise and worth every penny.",

    author1: "Andrey Kovalev",
    author2: "Victor Sokolov",
    author3: "Nikolay Zakharov",

    footerDescription:
      "Professional band saw blades for wood and metal. Reliability, quality and fast delivery across Russia.",

    navigation: "Navigation",
    home: "Home",
    reviews: "Reviews",
    footerContacts: "Contacts",

    whatsapp: "WhatsApp",
    telegram: "Telegram",
    workingHours: "Daily 09:00–20:00",

    copyright: "© 2026 HOLZFÄLLER. All rights reserved.",
    quality: "We stand for quality.",
  },
};
function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
}
const options = document.querySelectorAll(".lang-switcher__option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const lang = option.dataset.lang;

    setLanguage(lang);
  });
});
const savedLanguage = localStorage.getItem("language") || "ru";
setLanguage(savedLanguage);

// ====== Плавный скролл (кастомный) ======
function smoothScrollTo(targetY, duration = 600) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeInOutCubic
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      const header = document.querySelector(".header");
      const headerHeight = header ? header.offsetHeight : 0;
      const targetRect = target.getBoundingClientRect();
      const offsetTop = targetRect.top + window.pageYOffset - headerHeight - 20;

      smoothScrollTo(offsetTop, 700);
    });
  });
});

// ====== КНОПКА "НАВЕРХ" ======
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (typeof smoothScrollTo === "function") {
      smoothScrollTo(0, 600);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
