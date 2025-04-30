
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("event-booking-form");
    const bookedEventsList = document.getElementById("booked-events-list");
    const bookedEventsCount = document.getElementById("booked-events-count");

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    function updateBookedEvents() {
        bookedEventsList.innerHTML = "";
        bookings.forEach(booking => {
            const li = document.createElement("li");
            li.textContent = `${booking.name} booked for "${booking.event}" on ${booking.date} (Email: ${booking.email})`;
            bookedEventsList.appendChild(li);
        });
        bookedEventsCount.textContent = `Total Booked Events: ${bookings.length}`;
    }

    updateBookedEvents();

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const event = form.elements["event"].value;
        const eventDate = form.elements["eventDate"].value;

        if (name && email && eventDate) {
            const booking = { name, email, event, date: eventDate };
            bookings.push(booking);

            localStorage.setItem("bookings", JSON.stringify(bookings));

            alert(`Thank you for booking, ${name}! You are booked for the "${event}" on ${eventDate}.`);

            form.reset();

            updateBookedEvents();
        }
    });
});
