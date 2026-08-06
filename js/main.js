// ======================== Языки ========================
const translations = {
  ru: {
    about: "О нас",
    catalog: "Каталог",
    contacts: "Контакты",
    heroText:
      "Мы — надёжность, проверенная делом. Высокое качество, прочные материалы и безупречная производительность делают эти пилы отличным выбором как для профессионалов, так и для тех, кто ценит надёжный инструмент.",
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
    writeEmail: "Напишите нам на почту —",
    emailDescription:
      "ответим быстро, проконсультируем<br />и поможем подобрать подходящую<br />пилу.",
    email: "Почта",
    priceMessage: "Прайс и наши образцы отправим вам<br />в ЛС или на почту",
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
      "We are reliability proven in practice. High quality, durable materials and flawless performance make these saws an excellent choice for professionals and for those who value reliable tools.",
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
    writeEmail: "Write to us by email —",
    emailDescription:
      "we'll reply quickly, consult<br />and help you choose the right<br />saw.",
    email: "Email",
    priceMessage:
      "We'll send you the price list and samples<br />via DM or email",
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

// ======================== Установка языка ========================

const flagPaths = {
  ru: "images/flags/россия.webp",
  en: "images/flags/великобритания.avif",
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);

  const toggleFlag = document.querySelector(
    ".lang-switcher__toggle .lang-switcher__flag",
  );
  const label = document.querySelector(".lang-switcher__label");

  if (toggleFlag) {
    toggleFlag.src = flagPaths[lang] || flagPaths.ru;
    toggleFlag.alt = lang === "ru" ? "Русский" : "English";
  }

  if (label) {
    const langName =
      translations[lang]?.currentLanguage ||
      (lang === "ru" ? "Русский" : "English");
    label.textContent = langName;
  }

  document.querySelectorAll(".lang-switcher__option").forEach((opt) => {
    opt.classList.toggle(
      "lang-switcher__option--active",
      opt.dataset.lang === lang,
    );
  });
}

// ======================== Переключатель языка ========================
(function initLanguageSwitcher() {
  const switcher = document.querySelector(".lang-switcher");
  if (!switcher) return;

  const toggle = switcher.querySelector(".lang-switcher__toggle");
  const menu = switcher.querySelector(".lang-switcher__menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  switcher.querySelectorAll(".lang-switcher__option").forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;
      if (lang) setLanguage(lang);
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

// ======================== Загрузка сохраненного языка ========================
const savedLang = localStorage.getItem("language") || "ru";
setLanguage(savedLang);

// ======================== Плавнй скролл ========================
function smoothScrollTo(targetY, duration = 600) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      const header = document.querySelector(".header");
      const headerHeight = header ? header.offsetHeight : 0;
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        20;
      smoothScrollTo(top, 700);
    });
  });
});

// ======================== Кнопка наверх ========================
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", window.pageYOffset > 300);
  });

  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScrollTo(0, 600);
  });
}

// ======================== изменение хедера, чтобы сблоками не сливался ========================
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 3350);
  });
}

// ======================== КОПИРОВАНИЕ НОМЕРА ТЕЛЕФОНА ========================
let copyTimeout = null;

function hideTooltip(wrapper) {
  const tooltip = wrapper.querySelector(".copy-tooltip");
  if (tooltip) {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
    if (tooltip.textContent === "Скопировано!") {
      tooltip.textContent = "Скопировать";
    }
  }
}

function resetTooltipText(wrapper) {
  const tooltip = wrapper.querySelector(".copy-tooltip");
  if (tooltip && tooltip.textContent === "Скопировано!") {
    tooltip.textContent = "Скопировать";
  }
}

function copyPhoneNumber(text, triggerElement) {
  const wrapper = triggerElement.closest(".phone-wrapper");
  const tooltip = wrapper.querySelector(".copy-tooltip");

  if (copyTimeout) {
    clearTimeout(copyTimeout);
    copyTimeout = null;
  }

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopyFeedback(wrapper, tooltip);
      })
      .catch(() => {
        fallbackCopy(text, wrapper, tooltip);
      });
  } else {
    fallbackCopy(text, wrapper, tooltip);
  }
}

function fallbackCopy(text, wrapper, tooltip) {
  const input = document.createElement("input");
  input.value = text;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  showCopyFeedback(wrapper, tooltip);
}

function showCopyFeedback(wrapper, tooltip) {
  tooltip.textContent = "Скопировано!";
  tooltip.style.opacity = 1;
  tooltip.style.visibility = "visible";

  copyTimeout = setTimeout(() => {
    tooltip.textContent = "Скопировать";
    if (!wrapper.matches(":hover")) {
      tooltip.style.opacity = 0;
      tooltip.style.visibility = "hidden";
    }
    copyTimeout = null;
  }, 1500);
}

// ---- Клик по иконке копирования ----
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const text = this.dataset.clipboard;
    if (text) copyPhoneNumber(text, this);
  });
});

// ---- Клик по тултипу (сама плашка) ----
document.querySelectorAll(".copy-tooltip").forEach((tooltip) => {
  tooltip.addEventListener("click", function (e) {
    e.stopPropagation();
    const text = this.dataset.clipboard;
    if (text) copyPhoneNumber(text, this);
  });
});

// ---- Показ/скрытие при наведении ----
document.querySelectorAll(".phone-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", function () {
    const tooltip = this.querySelector(".copy-tooltip");
    if (tooltip && tooltip.textContent === "Скопировать") {
      tooltip.style.opacity = 1;
      tooltip.style.visibility = "visible";
    }
  });

  wrapper.addEventListener("mouseleave", function () {
    const tooltip = this.querySelector(".copy-tooltip");
    if (tooltip && tooltip.textContent === "Скопировать" && !copyTimeout) {
      tooltip.style.opacity = 0;
      tooltip.style.visibility = "hidden";
    }
  });
});

// ---- Скрытие при клике вне блока ----
document.addEventListener("click", function (e) {
  const wrapper = e.target.closest(".phone-wrapper");
  if (!wrapper) {
    document.querySelectorAll(".copy-tooltip").forEach((t) => {
      t.style.opacity = 0;
      t.style.visibility = "hidden";
    });
    if (copyTimeout) {
      clearTimeout(copyTimeout);
      copyTimeout = null;
    }
  }
});
