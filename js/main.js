(() => {
  const services = window.NBKServices;
  const serviceCards = window.NBKServiceCards;
  const galleryItems = [
    { src: "1.jpg", alt: "Warme bruine nagels met glanzende gouden accenten" },
    { src: "2.jpg", alt: "Klassieke rode nagels in een feestelijke setting" },
    { src: "3.jpg", alt: "Nude nagels met rode French tips en subtiele nail art" },
    { src: "4.jpg", alt: "Roze nagels met een klassieke witte French finish" },
    { src: "7.jpg", alt: "Gele nagels met een glanzende afwerking" },
    { src: "8.jpg", alt: "Roze nagels met een witte French finish" },
    { src: "9.jpg", alt: "Lichtblauwe nagels met glitter en ombre-effect" },
    { src: "10.jpg", alt: "Diep bordeauxrode nagels met hoogglans" },
    { src: "11.jpg", alt: "Roze nagels met een opvallende fuchsia French tip" }
  ];
  const videos = [
    { src: "video1.mp4", poster: "1.jpg", label: "Creatie 1" },
    { src: "video2.mp4", poster: "2.jpg", label: "Creatie 2" },
    { src: "video3.mp4", poster: "3.jpg", label: "Creatie 3" },
    { src: "video4.mp4", poster: "4.jpg", label: "Creatie 4" },
    { src: "video5.mp4", poster: "8.jpg", label: "Creatie 5" },
    { src: "video6.mp4", poster: "10.jpg", label: "Creatie 6" }
  ];
  const week = [
    ["maandag", "09:30 - 18:00"],
    ["dinsdag", "09:30 - 18:00"],
    ["woensdag", "09:30 - 18:00"],
    ["donderdag", "09:30 - 18:00"],
    ["vrijdag", "09:30 - 18:00"],
    ["zaterdag", "09:30 - 18:00"],
    ["zondag", "12:00 - 17:00"]
  ];

  const serviceGrid = document.querySelector("#service-grid");
  const priceTabs = document.querySelector("#price-tabs");
  const priceContent = document.querySelector("#price-content");
  const galleryGrid = document.querySelector("#gallery-grid");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const videoPicker = document.querySelector("#video-picker");
  const video = document.querySelector("#showcase-video");
  const videoCaption = document.querySelector("#video-caption");
  let activeGalleryIndex = 0;

  function renderServiceCards() {
    if (!serviceGrid) return;
    serviceGrid.innerHTML = serviceCards.map(({ serviceId, priceIndex, displayName }, index) => {
      const service = services.find((item) => item.id === serviceId);
      if (!service) return "";
      return `
        <article class="service-card reveal" style="--card-index:${index}">
          <a class="service-image" href="#prijzen" data-price-target="${service.id}" aria-label="Bekijk prijzen voor ${displayName || service.name}">
            <img src="${service.image}" alt="${service.imageAlt}" loading="lazy">
            <span class="service-image-arrow" aria-hidden="true">→</span>
          </a>
          <div class="service-card-body">
            <h3>${displayName || service.name}</h3>
            <p>${service.description}</p>
            <div class="service-card-bottom"><span>Vanaf <strong>${service.startingPrice.replace(/^Vanaf /, "")}</strong></span><a href="#prijzen" data-price-target="${service.id}">Bekijk prijzen <span aria-hidden="true">→</span></a></div>
          </div>
        </article>`;
    }).join("");
  }

  function renderPriceTabs() {
    if (!priceTabs) return;
    priceTabs.innerHTML = services.map((service, index) => `
      <button class="price-tab${index === 0 ? " is-active" : ""}" id="tab-${service.id}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="price-panel" tabindex="${index === 0 ? "0" : "-1"}" data-price-tab="${service.id}">${service.name}</button>
    `).join("");
  }

  function showPriceGroup(serviceId, focusTab = false) {
    const service = services.find((item) => item.id === serviceId);
    if (!service || !priceTabs || !priceContent) return;

    priceTabs.querySelectorAll(".price-tab").forEach((tab) => {
      const selected = tab.dataset.priceTab === serviceId;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focusTab) tab.focus();
    });

    priceContent.innerHTML = `
      <div class="price-panel-heading">
        <div><span class="price-kicker">Behandelingen</span><h3 id="price-panel-title">${service.name}</h3></div>
        <span class="price-count">${String(service.items.length).padStart(2, "0")} opties</span>
      </div>
      <div class="price-list" id="price-panel" role="tabpanel" aria-labelledby="tab-${service.id}">
        ${service.items.map(([name, amount]) => `
          <div class="price-row"><span>${name}</span><strong>${amount}</strong></div>
        `).join("")}
      </div>
      ${service.note ? `<p class="category-note">${service.note}</p>` : ""}
    `;
  }

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = galleryItems.map((item, index) => `
      <button class="gallery-item reveal" type="button" data-gallery-index="${index}" aria-label="Bekijk afbeelding ${index + 1}: ${item.alt}" style="--gallery-index:${index}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
        <span class="gallery-zoom" aria-hidden="true">+</span>
      </button>
    `).join("");
  }

  function renderVideos() {
    if (!videoPicker) return;
    videoPicker.innerHTML = videos.map((item, index) => `
      <button class="video-choice${index === 0 ? " is-active" : ""}" type="button" data-video-index="${index}" aria-label="Speel ${item.label.toLowerCase()} af" aria-pressed="${index === 0}">
        <img src="${item.poster}" alt="" loading="lazy"><span aria-hidden="true">▶</span>
      </button>
    `).join("");
  }

  function renderHours() {
    const hoursList = document.querySelector("#hours-list");
    if (!hoursList) return;
    const dayFormat = new Intl.DateTimeFormat("nl-NL", { weekday: "long", timeZone: "Europe/Amsterdam" });
    const today = dayFormat.format(new Date()).toLocaleLowerCase("nl-NL");
    hoursList.innerHTML = week.map(([day, hours]) => `
      <div class="hours-row${day === today ? " is-today" : ""}">
        <span>${day}${day === today ? '<span class="today-label">Vandaag</span>' : ""}</span><strong>${hours}</strong>
      </div>
    `).join("");
  }

  function setVideo(index, shouldPlay = false) {
    const item = videos[index];
    if (!item || !video) return;
    video.pause();
    video.src = item.src;
    video.poster = item.poster;
    video.load();
    if (videoCaption) videoCaption.textContent = `Een kijkje in de studio, ${item.label.toLowerCase()}`;
    videoPicker?.querySelectorAll(".video-choice").forEach((button, buttonIndex) => {
      const selected = buttonIndex === index;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    if (shouldPlay) {
      const playback = video.play();
      if (playback) playback.catch((error) => {
        if (error.name !== "AbortError") console.error("De video kon niet worden afgespeeld.", error);
      });
    }
  }

  function openLightbox(index) {
    activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[activeGalleryIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = `${String(activeGalleryIndex + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}: ${item.alt}`;
    if (!lightbox.open) lightbox.showModal();
  }

  function closeMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    toggle?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Menu openen");
    navigation?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  renderServiceCards();
  renderPriceTabs();
  renderGallery();
  renderVideos();
  renderHours();
  showPriceGroup(services[0].id);
  document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());
  setVideo(0);

  video?.addEventListener("error", () => {
    if (videoCaption) videoCaption.textContent = "De video kan momenteel niet worden geladen.";
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const priceTarget = target.closest("[data-price-target]");
    if (priceTarget) {
      const serviceId = priceTarget.getAttribute("data-price-target");
      if (serviceId) showPriceGroup(serviceId);
    }

    const priceTab = target.closest("[data-price-tab]");
    if (priceTab) showPriceGroup(priceTab.getAttribute("data-price-tab"), true);

    const galleryButton = target.closest("[data-gallery-index]");
    if (galleryButton) openLightbox(Number(galleryButton.getAttribute("data-gallery-index")));

    const videoButton = target.closest("[data-video-index]");
    if (videoButton) setVideo(Number(videoButton.getAttribute("data-video-index")), true);

    if (target.closest(".lightbox-close")) lightbox.close();
    if (target.closest(".lightbox-prev")) openLightbox(activeGalleryIndex - 1);
    if (target.closest(".lightbox-next")) openLightbox(activeGalleryIndex + 1);

    const menuToggle = target.closest(".menu-toggle");
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Menu openen" : "Menu sluiten");
      menuToggle.classList.toggle("is-open", !isOpen);
      document.querySelector(".main-navigation")?.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    } else if (target.closest(".main-navigation a")) {
      closeMenu();
    }
  });

  priceTabs?.addEventListener("keydown", (event) => {
    const currentIndex = services.findIndex((service) => service.id === event.target?.dataset?.priceTab);
    if (currentIndex < 0) return;
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % services.length;
    else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + services.length) % services.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = services.length - 1;
    else return;
    event.preventDefault();
    showPriceGroup(services[nextIndex].id, true);
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox?.open) return;
    if (event.key === "ArrowLeft") openLightbox(activeGalleryIndex - 1);
    if (event.key === "ArrowRight") openLightbox(activeGalleryIndex + 1);
  });

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  const header = document.querySelector(".site-header");
  const headerSentinel = document.querySelector(".header-sentinel");
  if (header && headerSentinel && "IntersectionObserver" in window) {
    const headerObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle("is-scrolled", !entry.isIntersecting);
    });
    headerObserver.observe(headerSentinel);
  }

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  const magneticButtons = document.querySelectorAll(".hero-actions .button, .nav-cta");
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    magneticButtons.forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.08;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.1;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }

  window.addEventListener("load", () => {
    window.setTimeout(() => document.body.classList.add("is-loaded"), 180);
  }, { once: true });
  window.setTimeout(() => document.body.classList.add("is-loaded"), 1600);
})();
