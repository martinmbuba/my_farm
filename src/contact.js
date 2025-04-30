document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const display = document.getElementById("submitted-message");
  
    // Check if there are stored messages in localStorage and display them
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    displayMessages(storedMessages);
  
    if (!form || !display) return;
  
    // When the form is submitted
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.elements["name"].value.trim();
      const message = form.elements["message"].value.trim();
  
      if (name && message) {
        // Create a message object
        const newMessage = { name, message };
  
        // Save the new message to localStorage
        storedMessages.push(newMessage);
        localStorage.setItem("messages", JSON.stringify(storedMessages));
  
        // Display the new message
        displayMessages(storedMessages);
  
        // Reset the form
        form.reset();
      }
    });
  
    // Function to display the messages
    function displayMessages(messages) {
      display.innerHTML = '';
      if (messages.length > 0) {
        display.style.display = "block";
        messages.forEach(msg => {
          const messageHTML = `
            <div style="margin-bottom: 15px;">
              <h3>Message Sent</h3>
              <p><strong>From:</strong> ${msg.name}</p>
              <p><strong>Message:</strong> ${msg.message}</p>
            </div>
          `;
          display.innerHTML += messageHTML;
        });
      } else {
        display.style.display = "none";
      }
    }
  });
  