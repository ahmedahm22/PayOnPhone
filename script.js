const dropupButton = document.getElementById('dropupButton');
const dropupMenu = document.getElementById('dropupMenu');
const languageList = document.getElementById('languageList');
const selectedLanguageText = document.getElementById('selectedLanguage');
const arrow = document.getElementById('arrow');

// Toggle the dropup menu visibility
// dropupButton.addEventListener('click', function () {
//     dropupMenu.classList.toggle('hidden');

//     // Toggle the arrow direction
//     if (dropupMenu.classList.contains('hidden')) {
//         arrow.classList.remove('arrow-up');
//         arrow.classList.add('arrow-down');
//     } else {
//         arrow.classList.remove('arrow-down');
//         arrow.classList.add('arrow-up');
//     }
// });

// Handle selection of a language and update the button
// languageList.addEventListener('click', function (event) {
//     const selectedLanguage = event.target.innerText;

//     // Update the button text
//     selectedLanguageText.innerText = selectedLanguage;

//     // Move the selected language to the top of the list
//     Array.from(languageList.children).forEach(item => {
//         if (item.innerText === selectedLanguage) {
//             languageList.prepend(item);
//         }
//     });

//     // Hide the dropup menu and reset the arrow
//     dropupMenu.classList.add('hidden');
//     arrow.classList.remove('arrow-up');
//     arrow.classList.add('arrow-down');
// });

// Optional: Close the dropup when clicking outside of it
// document.addEventListener('click', function (e) {
//     if (!dropupButton.contains(e.target) && !dropupMenu.contains(e.target)) {
//         dropupMenu.classList.add('hidden');
//         arrow.classList.remove('arrow-up');
//         arrow.classList.add('arrow-down');
//     }
// });



document.getElementById('parkingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get the form data
    const locationNumber = document.getElementById('location').value;
    const data = {
        "locationNum": locationNumber
    }
    
    // Store the form data in local storage as a string
    localStorage.setItem('PayByPhoneData', JSON.stringify(data));

    // Redirect to the new page
    window.location.href = "Pages/Parking/Parking.html";
});