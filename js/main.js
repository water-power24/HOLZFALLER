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
