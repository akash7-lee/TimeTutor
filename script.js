// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Form Validation (Optional)
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (name && email && password) {
      alert('Sign Up Successful! Welcome to TimeTutor.');
      // You can add code here to submit the form data to a server
    } else {
      alert('Please fill out all fields.');
    }
  });
// Form Validation (Optional)
document.querySelector('.signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert('Sign In Successful! Welcome back to TimeTutor.');
      // You can add code here to submit the form data to a server
    } else {
      alert('Please fill out all fields.');
    }
  });