const slides = document.querySelectorAll('.slide-item');
const caption = document.getElementById('carousel-caption');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

// Get captions from each slide's h3 text
const captions = Array.from(slides).map(slide => {
  const title = slide.querySelector('h3');
  return title ? title.textContent : '';
});

let currentIndex = 0;

// Generate dots dynamically
dotsContainer.innerHTML = '';
slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.index = idx;
  dotsContainer.appendChild(dot);
});

// Show slide function
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
  caption.textContent = captions[index];
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Navigation
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

// Dot navigation
document.querySelectorAll('.dot').forEach(dot => {
  dot.onclick = () => {
    currentIndex = Number(dot.dataset.index);
    showSlide(currentIndex);
  };
});

// Initialize
showSlide(currentIndex);
