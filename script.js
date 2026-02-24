// All elemnts
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const  teamselect = document.getElementById('teamSelect');

// Form Submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values
  const name = nameInput.value;
  const team = teamselect.value;
console.log(name, team);

});