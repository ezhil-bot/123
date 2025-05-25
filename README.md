# Smart Pill Reminder

A simple web app to help doctors set medicine reminders for patients and notify patients at the right time. Includes caretaker notifications and alarm sound.

---

## Features

- Doctor login to add medication reminders by patient ID and time.
- Patient login to receive medicine reminders with alerts.
- Local storage of reminders per patient.
- SMS simulation in console logs (for patient and caretaker).
- Alarm sound on reminder.
- Service Worker support for offline usage.

---

## Setup Instructions

1. Clone or download this repo:

   ```bash
   git clone https://github.com/ezhil-bot/123.git
   cd 123
   ```

2. Create a `screenshots` folder in the root directory and add the following images:

   - `login.png`
   - `doctor.png`
   - `patient.png`

   These images are used in the README and app UI.

3. Open `index.html` in your browser to start using the app.

---

## Usage

- Select role (Doctor or Patient) and enter your ID.
- Doctors can add reminders specifying patient ID, time, dosage, and phone numbers.
- Patients will receive alerts at the reminder times.
- Caretaker and patient SMS reminders are logged to the console.

---

## Screenshots

| Login Screen | Doctor Dashboard | Patient Dashboard |
|--------------|------------------|-------------------|
| ![Login](./screenshots/login.png) | ![Doctor](./screenshots/doctor.png) | ![Patient](./screenshots/patient.png) |

---

## Technologies Used

- HTML, CSS, JavaScript
- Service Workers for offline functionality
- LocalStorage for data persistence

---

## License

MIT License

---

## Contact

Created by Ezhilarasan M T.  
Feel free to reach out for improvements or questions.
