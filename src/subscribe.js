document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("custom-Subscribe-form");
    const thankYouMessage = document.getElementById("thank-you-message");
  
    const subscribersList = document.getElementById("subscriber-list");
    const subscriberCount = document.getElementById("subscriber-count");
  
    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
  
    function updateSubscriberList() {
      subscribersList.innerHTML = "";
      subscribers.forEach((subscriber) => {
        const li = document.createElement("li");
        li.textContent = `${subscriber.name} - Interested in: ${subscriber.interest}`;
        subscribersList.appendChild(li);
      });
      subscriberCount.textContent = subscribers.length;
    }
  
    updateSubscriberList();
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const interest = form.elements["interest"].value;
  
      if (!name || !email || !interest) return;
  
      const subscriber = { name, email, interest };
      subscribers.push(subscriber);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
  
      thankYouMessage.textContent = `Thank you for subscribing, ${name}!`;
      thankYouMessage.style.display = "block";
  
      form.reset();
      updateSubscriberList();
    });
  });
  