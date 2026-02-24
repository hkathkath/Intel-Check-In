// All elemnts
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const  teamselect = document.getElementById('teamSelect');

// Track Attendance
let count = 0;
const maxCount = 50;


// Form Submission
form.addEventListener('submit', function(event) {
  e.preventDefault();

  // Get values
  const name = nameInput.value;
  const team = teamselect.value;
  const teamName = teamselect.selectedOptions[0].text;

console.log(name, teamName);

// Increment Count
count++;
console.log("Total check-ins: ", count);

// Update progress bar
const percentage = Math.round((count / maxCount) * 100) + "%";
console.log('Progress: ${percentage}');

// Update Team Counter
const teamCounter = document.getElementById(team + "Count");
const current = parseInt(teamCounter.textContext);
console.log("Previous team count: ", current);

const newTotal = current + 1
console.log("New team count: ", newTotal);


});