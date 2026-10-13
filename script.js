const galleryImages = [
  "IMG-20260902-WA0080.jpg",
  "IMG-20260902-WA0108.jpg",
  "IMG-20260902-WA0109.jpg",
  "WhatsApp Image 2026-08-08 at 11.04.55 AM.jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.42 PM (1).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.42 PM (2).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.42 PM.jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.43 PM (1).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.43 PM (2).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.43 PM.jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.44 PM (1).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.44 PM (2).jpeg",
  "WhatsApp Image 2026-08-10 at 2.13.44 PM.jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.06 AM (1).jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.06 AM (2).jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.06 AM (3).jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.06 AM.jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.07 AM.jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.08 AM (1).jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.08 AM.jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.09 AM (1).jpeg",
  "WhatsApp Image 2026-08-11 at 11.27.09 AM.jpeg",
  "WhatsApp Image 2026-09-28 at 9.07.42 AM.jpeg",
  "WhatsApp Image 2026-09-28 at 9.07.52 AM.jpeg",
  "WhatsApp Image 2026-09-30 at 2.41.57 PM.jpeg",
  "WhatsApp Image 2026-10-10 at 4.55.26 PM.jpeg",
  "WhatsApp Image 2026-10-12 at 9.35.19 AM (1).jpeg",
  "WhatsApp Image 2026-10-12 at 9.35.19 AM.jpeg",
  "WhatsApp Image 2026-10-12 at 9.35.20 AM.jpeg"
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

galleryImages.forEach((src, index) => {
  const card = document.createElement("button");
  card.className = "gallery-card";
  card.type = "button";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.setAttribute("aria-label", `Open love memory ${index + 1}`);

  const image = document.createElement("img");
  image.src = src;
  image.alt = `Love memory ${index + 1}`;
  image.loading = "lazy";

  card.appendChild(image);
  card.addEventListener("click", () => openLightbox(src));
  galleryGrid.appendChild(card);
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});
