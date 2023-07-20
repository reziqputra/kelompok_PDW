// Define the showAlert function
function showAlert(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;
    var menu = document.getElementById('Menu').value; // Using the correct ID for the "Menu Yang dipesan" field
    var jumlah = document.getElementById('jumlah').value;

    // Construct the message to display in the alert
    var message = "Terima kasih, " + nama + "!\n";
    message += "Pesanan details:\n";
    message += "Email: " + email + "\n";
    message += "Telepon: " + telepon + "\n";
    message += "Menu Yang dipesan: " + menu + "\n";
    message += "Jumlah Pesanan: " + jumlah + "\n";

    // Display the alert with the booking details
    alert(message);

    // Optional: Clear the form fields after submission
    document.getElementById('nama').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telepon').value = "";
    document.getElementById('Menu').value = ""; // Using the correct ID for the "Menu Yang dipesan" field
    document.getElementById('jumlah').value = "";
}

// Add event listener to the form submission using the showAlert function
document.getElementById('pesananForm').addEventListener('submit', showAlert);
