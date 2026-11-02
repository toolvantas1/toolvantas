(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 600px)").matches) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }
  if (document.head && !document.head.querySelector('link[rel~="icon"]')) {
    const ico = document.createElement("link");
    ico.rel = "icon";
    ico.href = "/favicon.ico";
    ico.sizes = "48x48";
    const svg = document.createElement("link");
    svg.rel = "icon";
    svg.href = "/favicon.svg";
    svg.type = "image/svg+xml";
    document.head.append(ico, svg);
  }
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
