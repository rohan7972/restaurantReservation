function checkAvailability() {
    // Get selected date and time
    const date = document.getElementById("reservationDate").value;
    const time = document.getElementById("reservationTime").value;

    // Perform availability check (you can replace this with your backend logic)
    const isAvailable = true; // Replace with actual availability check

    // Display confirmation or error message
    const confirmationDiv = document.getElementById("reservationConfirmation");

    if (isAvailable) {
        confirmationDiv.style.display = "block";
        document.getElementById("confirmedDate").textContent = date;
        document.getElementById("confirmedTime").textContent = time;

        // Add logic to store the reservation (you may need to send a request to your server here)
    } else {
        confirmationDiv.style.display = "none";
        alert("Sorry, the selected date and time are not available. Please choose another.");
    }
}
