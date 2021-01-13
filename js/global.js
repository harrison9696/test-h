// Naming the variables
const slides = document.querySelectorAll(`.header__slide`);
const auto = true;
const intervalTime = 5000;
let slideInterval;

// Show the next slide
const nextSlide = () => {
  // get --current slide
  const current = document.querySelector(`.header__slide--current`);
  // remove --current class from slide
  current.classList.remove(`header__slide--current`);
  // check for next slide
  if(current.nextElementSibling && current.nextElementSibling.classList.contains(`header__slide`)) {
    // add --current to next sibling
    current.nextElementSibling.classList.add(`header__slide--current`);
  } else {
    // add --current to start
    slides[0].classList.add(`header__slide--current`);
  }

  setTimeout(() => current.classList.remove(`header__slide--current`));
}

// Auto slide
if(auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}