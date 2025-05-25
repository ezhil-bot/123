
# 💊 Smart Pill Reminder

A simple, browser-based Progressive Web App (PWA) that helps doctors set medication reminders for patients, and alerts patients when it's time to take their pills.

Live Demo 👉 [Smart Pill Reminder](https://ezhil-bot.github.io/123)

---

## 📦 Features

- 👨‍⚕️ Doctor and patient login
- ⏰ Reminder scheduling with time and dosage
- 🔔 Patient gets alert with sound when it’s time for medicine
- 💾 Data stored locally using `localStorage`
- 📱 Works offline (PWA support with service worker)

---

## 🛠️ How to Use

1. **Doctor Login**
   - Choose "Doctor" from the dropdown
   - Enter any ID and click "Login"
   - Fill patient details, time, dosage, and contact info
   - Click ➕ Add Reminder

2. **Patient Login**
   - Choose "Patient" from the dropdown
   - Enter the same Patient ID used by doctor
   - Patient will see reminders and get alerts when it's time

---

## 🚀 How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/ezhil-bot/123.git
   cd 123
   ```

2. Open `index.html` in your browser.

3. Optional: To run as a local PWA, use a local server:
   ```bash
   npx serve .
   ```

---

## 🧾 Project Structure

```
📁 root/
├── index.html            # Main HTML UI
├── app.js                # JavaScript logic
├── style.css             # Basic styling
├── service-worker.js     # For offline support
├── manifest.json         # PWA metadata
└── icon.png              # App icon
```

---

## 📦 Built With

- HTML5, CSS3, Vanilla JavaScript
- `localStorage` for reminder storage
- PWA features: service worker, manifest, offline support

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
