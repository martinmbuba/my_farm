function toggleDropdown() {
    document.getElementById("serviceDropdown").classList.toggle("show");
  }

  function scrollToService(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    document.getElementById("serviceDropdown").classList.remove("show");
  }

  // Close dropdown if clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('custom-subscribe-form');
    const message = document.getElementById('thank-you-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent reload
  
      message.style.display = 'block'; // Show thank-you message
      form.reset(); // Optional: clear form fields
    });
  });
  
  


  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('custom-subscribe-form');
    const message = document.getElementById('thank-you-message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      message.textContent = '✅ Thank you for subscribing!';
      message.style.display = 'block';
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const thankYouMsg = document.getElementById("thank-you-message");
    const messageDisplay = document.getElementById("submitted-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop actual submission
  
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const message = form.elements["message"].value;
  
      // Show thank-you message
      thankYouMsg.textContent = "Thank you for reaching out! We’ll get back to you soon.";
      thankYouMsg.style.display = "block";
  
      // Display submitted data at the bottom
      messageDisplay.innerHTML = `
        <h3>Your Submitted Message:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      messageDisplay.style.display = "block";
  
      form.reset();
    });
  });
  

