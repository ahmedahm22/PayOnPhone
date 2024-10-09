// Select the dropdown button and the dropdown menu
const vehicleDropdownBtn = document.getElementById('vehicleDropdownBtn');
const vehicleDropdownMenu = document.getElementById('vehicleDropdownMenu');

// Select the hidden input for the vehicle type
const vehicleTypeInput = document.getElementById('vehicleType');

// Add a click event listener to the dropdown button
vehicleDropdownBtn.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default form submission/reload behavior
    vehicleDropdownMenu.classList.toggle('hidden');  // Toggle the visibility of the dropdown menu
});

// Handle click events on the dropdown items to select a vehicle type
const vehicleItems = vehicleDropdownMenu.querySelectorAll('li');
vehicleItems.forEach(item => {
    item.addEventListener('click', function () {
        const selectedVehicle = this.getAttribute('data-value'); // Get the selected vehicle value
        vehicleDropdownBtn.querySelector('span').innerText = selectedVehicle; // Update the button text
        vehicleDropdownMenu.classList.add('hidden'); // Hide the dropdown menu after selection
        
        // Update the hidden input with the selected vehicle type
        vehicleTypeInput.value = selectedVehicle; // Set the value of the hidden input

        // Update ticks
        vehicleItems.forEach(i => {
            const tick = i.querySelector('.tick');
            if (i === this) {
                tick.classList.remove('hidden'); // Show tick for selected item
            } else {
                tick.classList.add('hidden'); // Hide tick for others
            }
        });

        // Optional: Log or alert the selected vehicle for verification
        console.log(`Selected Vehicle: ${selectedVehicle}`); // Log the selected vehicle for verification
    });
});

// Check if the card data is present on load
document.addEventListener("DOMContentLoaded", () => {
   const cardData = JSON.parse(localStorage.getItem('PayByPhoneData'));
    // If card data is not present, redirect
    if (!cardData) {
        window.location.href = "../../index.html"; // Redirect to home or another page
    }
});

// Handle vehicle form submission
const vehicleForm = document.querySelector("form");

vehicleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect vehicle form data
    const vehicleData = {
        licenseNum: document.getElementById("licenseNum").value,
        vehicleType: document.getElementById("vehicleType").value,
    };
    let payByPhoneData = JSON.parse(localStorage.getItem('PayByPhoneData'));
    const data={
        ...payByPhoneData,
        ...vehicleData
    }
    // Store vehicle data in localStorage
    localStorage.setItem('PayByPhoneData', JSON.stringify(data));

    // Redirect after submission (if needed)
    window.location.href = "../Location/Location.html";
});
