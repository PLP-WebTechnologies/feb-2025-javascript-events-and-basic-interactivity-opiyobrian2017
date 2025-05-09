// Button Click Event
document.getElementById('special-offer-btn').addEventListener('click', () => {
  alert('Exclusive Offer: Book now and get 20% off your stay!');
});

// Image Gallery Slideshow
const images = ['bar.jpg', 'conference.jpg', 'dine.jpg', 'room1.jpg'];
let currentImageIndex = 0;

document.getElementById('next-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('gallery-img').src = images[currentImageIndex];
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('gallery-img').src = images[currentImageIndex];
});

// Tabs for Interactive Content
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    tabContents.forEach(content => content.style.display = 'none');
    document.getElementById(`tab-${tabId}`).style.display = 'block';
  });
});

// Form Validation
const form = document.getElementById('hotel-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Name Validation
  const name = document.getElementById('name');
  const nameError = document.getElementById('name-error');
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email Validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Invalid email format.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Password Validation
  const password = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});