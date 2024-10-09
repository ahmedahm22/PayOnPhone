// Select the dropdown button and the dropdown menu
const vehicleDropdownBtn = document.getElementById('vehicleDropdownBtn');
const vehicleDropdownMenu = document.getElementById('vehicleDropdownMenu');
const parkingForm=document.getElementById("parkingForm");

// Select the hidden input for the vehicle type
const timeDurationInput = document.getElementById('timeDuration');

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
        timeDurationInput.value = selectedVehicle; // Set the value of the hidden input

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




parkingForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Collect parking duration data
    const parkingDurationData = {
        duration: document.getElementById("licenseNum").value, // Assume this is the parking duration input
        timeUnit: document.getElementById("timeDuration").value // Time unit selected from dropdown
    };

    // Retrieve existing data from localStorage
    let cardData = JSON.parse(localStorage.getItem('PayByPhoneData'));

    // Append the parking duration data to cardData or vehicleData
    const completeData = {
        ...cardData,
        ...parkingDurationData
    };

    // Save the updated data back into localStorage
    localStorage.setItem('PayByPhoneData', JSON.stringify(completeData));

    // Redirect to the Payment page
    window.location.href = "../Payment/Payment.html";
});