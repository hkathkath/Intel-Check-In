// All elemnets
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const  teamselect = document.getElementById("teamSelect");

// Track Attendance
let count = 0;
const maxCount = 50;
let attendees = [];

// Form Submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = nameInput.value;
  const team = teamselect.value;
  const teamName = teamselect.selectedOptions[0].text;

console.log(name, teamName);

// Increment Count
count++;
console.log("Total check-ins: ", count);

// Store attendee
attendees.push({ name: name, team: teamName });

// Update attendee count display
document.getElementById("attendeeCount").textContent = count;

// Update progress bar
const percentage = Math.round((count / maxCount) * 100) + "%";
document.getElementById("progressBar").style.width = percentage;
console.log(`Progress: ${percentage}`);

// Update Team Counter
const teamCounter = document.getElementById(team + "Count");
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

// Welcome Message
const message = `Welcome, ${name} from ${teamName}`;
document.getElementById("greeting").textContent = message;
console.log(message);

// Update attendee list
updateAttendeeList();

form.reset();
});

// Function to update attendee list
function updateAttendeeList() {
  const attendeeListBody = document.getElementById("attendeeListBody");
  attendeeListBody.innerHTML = "";
  
  attendees.forEach(attendee => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${attendee.name}</td>
      <td>${attendee.team}</td>
    `;
    attendeeListBody.appendChild(row);
  });
}