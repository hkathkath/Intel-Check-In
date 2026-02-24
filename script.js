// All elemnets
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const  teamselect = document.getElementById("teamSelect");

// Track Attendance
let count = 0;
const maxCount = 50;


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

form.reset();
});