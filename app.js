function login() {
  const role = document.getElementById('role').value;
  const id = document.getElementById('id').value.trim();

  if (!id) {
    alert("Please enter your ID.");
    return;
  }

  if (role === "doctor") {
    document.getElementById('doctor-panel').classList.remove('hidden');
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

  let existing = JSON.parse(localStorage.getItem(`reminder-${patientId}`)) || [];
  existing.push(reminder);
  localStorage.setItem(`reminder-${patientId}`, JSON.stringify(existing));

  alert(`Reminder set for ${formattedTime} with dosage "${dosage}".`);

  console.log(`📩 SMS to ${phone}: Take ${dosage} at ${formattedTime}`);
  console.log(`📩 SMS to caretaker ${caretaker}: Patient ${patientId} - ${dosage} at ${formattedTime}`);

  displayReminders(existing, "reminder-list");
}

function startReminderCheck(patientId) {
  const reminders = JSON.parse(localStorage.getItem(`reminder-${patientId}`)) || [];

  setInterval(() => {
    const now = new Date();
    const current = formatTimeAMPM(`${now.getHours()}:${now.getMinutes()}`);

    reminders.forEach(reminder => {
      if (reminder.time === current) {
        alert(`🔔 Time to take your medicine: ${reminder.dosage}`);
        playAlarm();
      }
    });
  }, 60000);

  displayReminders(reminders, "reminder-time");
}

function formatTimeAMPM(time24) {
  const [hourStr, minuteStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = minuteStr.padStart(2, '0');
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

function playAlarm() {
  document.getElementById("alarm-sound").play();
}

function displayReminders(reminders, elementId) {
  const list = document.getElementById(elementId);
  list.innerHTML = "";
  reminders.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.time} - ${r.dosage}`;
    list.appendChild(li);
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"));
}
