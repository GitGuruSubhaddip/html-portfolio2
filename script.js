// Sample data for available doctors
const availableDoctors = [
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Williams" },
    // Add more doctors as needed
];

// Function to populate the doctor list
function populateDoctorList() {
    const doctorsList = document.getElementById("doctors");
    availableDoctors.forEach((doctor) => {
        const li = document.createElement("li");
        li.textContent = doctor.name;
        doctorsList.appendChild(li);
    });
}

// Function to populate the doctor dropdown in the appointment form
function populateDoctorDropdown() {
    const doctorDropdown = document.getElementById("doctor");
    availableDoctors.forEach((doctor) => {
        const option = document.createElement("option");
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorDropdown.appendChild(option);
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById("name").value;
    const doctorId = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // You can perform further processing here, like sending data to the server.

    // For this example, let's display an alert.
    alert(`Appointment booked for ${name} with doctor ID ${doctorId} on ${date} at ${time}.`);
}

// Event listener to call functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
    populateDoctorList();
    populateDoctorDropdown();

    // Add event listener to the form submission
    const appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.addEventListener("submit", handleSubmit);
});
