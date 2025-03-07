// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  let scrollPosition = window.scrollY;

  // Add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Calculate new font size based on scroll position
  let newSize = 3 - scrollPosition * 0.03; // Decrease by 0.03 rem for every 1px scrolled

  // Clamping the font size between 1.5rem and 3rem
  newSize = Math.max(2, newSize);
  newSize = Math.min(3, newSize);

  logo.style.fontSize = newSize + "rem";
}

// Event listener for scroll event
window.addEventListener("scroll", checkScroll);
