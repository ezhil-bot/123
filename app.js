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

  let existing = JSON.parse(localStorage.getItem(`reminder-${patientId}`)) || [];
  existing.push(reminder);
  localStorage.setItem(`reminder-${patientId}`, JSON.stringify(existing));

  alert(`Reminder set for ${formattedTime} with dosage "${dosage}".`);

  console.log(`📩 SMS to ${phone}: Take ${dosage} at ${formattedTime}`);
  console.log(`📩 SMS to caretaker ${caretaker}: Patient ${patientId} - ${dosage} at ${formattedTime}`);

  displayReminders(existing, "reminder-list");

  // Clear inputs after adding reminder
  document.getElementById('patientId').value = '';
  document.getElementById('time').value = '';
  document.getElementById('dosage').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('caretaker').value = '';

  // Set focus back to patientId input
  document.getElementById('patientId').focus();
}
