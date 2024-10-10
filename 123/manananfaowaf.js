const letter = document.querySelector(".container");
const card = document.querySelector(".card");

function toggle() {
  card.classList.toggle("open");
}

function onMouseEnter() {
  card.style.transform = "translateY(-90px)";
}

function onMouseLeave() {
  card.style.transform = "translateY(0px)";
}

// Uncomment if you want to use mouse enter and leave events
// letter.addEventListener("mouseenter", onMouseEnter);
// letter.addEventListener("mouseleave", onMouseLeave);
letter.addEventListener("click", toggle);