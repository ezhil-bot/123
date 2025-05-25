function login() {
  const role = document.getElementById('role').value;
  const id = document.getElementById('id').value.trim();

  if (!id) {
    alert("Please enter your ID.");
    return;
  }

  if (role === "doctor") {
    document.getElementById('doctor-panel').classList.remove('hidden');
    document.getElementById('patientId').focus(); // Focus for quick entry
  } else {
    document.getElementById('patient-panel').classList.remove('hidden');
    startReminderCheck(id);
  }

  document.getElementById('login-section').classList.add('hidden');
}

function addReminder() {
  const patientId = document.getElementById('patientId').value.trim();
  const time = document.getElementById('time').value;
  const phone = document.getElementById('phone').value.trim();
  const caretaker = document.getElementById('caretaker').value.trim();
  const dosage = document.getElementById('dosage').value.trim();

  if (!patientId || !time || !dosage) {
    alert("Please fill in all fields.");
    return;
  }

  const formattedTime = formatTimeAMPM(time);
  const reminder = { time: formattedTime, dosage };

  let existing = JSON
