// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ===============================
// CERTIFICATE IMAGE MODAL
// ===============================

const certModal = document.getElementById("certModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".cert-image-btn").forEach((button) => {

  button.addEventListener("click", (event) => {

    // Prevent opening modal for PDF link
    if (button.tagName === "A") {
      return;
    }

    const image = button.getAttribute("data-image");
    const title = button.getAttribute("data-title");

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;

    certModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });

});


// Close modal

modalClose.addEventListener("click", closeModal);


// Close modal when clicking outside image

certModal.addEventListener("click", (event) => {

  if (event.target === certModal) {
    closeModal();
  }

});


// Close modal function

function closeModal() {

  certModal.classList.remove("active");

  document.body.style.overflow = "";

  modalImage.src = "";
}


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});


// Scroll to top

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}