const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("nav-sticky");
  else nav.classList.remove("nav-sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  // rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);

//////////////
// const allSections = document.querySelectorAll("section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

///////////////MODAL
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const image = document.createElement("img");
  image.src = e.path[0].currentSrc;
  modal.appendChild(image);
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  e.path[1].remove;
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
