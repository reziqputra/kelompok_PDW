// Define the showAlert function
function showAlert(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;
    var tanggal = document.getElementById('tanggal').value;
    var jam = document.getElementById('jam').value;
    var jumlah = document.getElementById('jumlah').value;

    // Construct the message to display in the alert
    var message = "Terima kasih, " + nama + "!\n";
    message += "Booking details:\n";
    message += "Email: " + email + "\n";
    message += "Telepon: " + telepon + "\n";
    message += "Tanggal Booking: " + tanggal + "\n";
    message += "Jam Booking: " + jam + "\n";
    message += "Jumlah Tamu: " + jumlah + "\n";

    // Display the alert with the booking details
    alert(message);

    // Optional: Clear the form fields after submission
    document.getElementById('nama').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telepon').value = "";
    document.getElementById('tanggal').value = "";
    document.getElementById('jam').value = "";
    document.getElementById('jumlah').value = "";
}

// Add event listener to the form submission using the showAlert function
document.getElementById('bookingForm').addEventListener('submit', showAlert);
