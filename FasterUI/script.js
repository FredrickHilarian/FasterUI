document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

// hamburger menu start//

document.addEventListener('DOMContentLoaded', function() {
  const openMenu = document.querySelector('.openMenu');
  const closeMenu = document.querySelector('.closeMenu');
  const mainMenu = document.querySelector('.mainMenu');

  openMenu.addEventListener('click', function() {
      mainMenu.style.display = 'flex';
      openMenu.style.display = 'none';
      closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', function() {
      mainMenu.style.display = 'none';
      openMenu.style.display = 'block';
      closeMenu.style.display = 'none';
  });
});

// hamburger menu end //


// carousel Start // 

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const carousel = document.querySelector('.carousel');

// Show initial slide
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Move the carousel container to center the active slide
  const offset = -slideIndex * (100 / 3);
  carousel.style.transform = `translateX(${offset}%)`;

//   // Hide all slides
//   slides.forEach(slide => {
//     slide.style.opacity = '0.5';
//   });

  // Show current slide
  slides[slideIndex].style.opacity = '1';
}


// carousel End //

// accordian start //
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-content header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const content = this.parentElement;
            const icon = this.querySelector('.fa');
            content.classList.toggle('active');
            
            if (content.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});
//accordian end
