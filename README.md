# 💊 Smart Pill Reminder App (PWA)

A modern and easy-to-use Progressive Web App (PWA) that allows doctors to set multiple medication reminders for patients. Patients receive alerts with dosage, offline support, and even alarm sounds. Installable and reliable, just like a native app.

🔗 **Live App**: [https://ezhil-bot.github.io/123](https://ezhil-bot.github.io/123)

---

## 🏠 Screens – At a Glance

### 🧪 Home Screen
- Select login role: Doctor or Patient
- Enter your unique ID

### 👨‍⚕️ Doctor Dashboard
- Enter Patient ID, reminder time, dosage, phone number, caretaker number
- Add multiple reminders with different times and doses
- View a list of reminders assigned to patient

### 👤 Patient Dashboard
- View all active reminders
- When time matches, alarm rings and alert shows dosage
- Works offline using service workers

### ⚙️ Settings & PWA Features
- Add to Home Screen (Android/iOS/PC)
- Works even without internet
- Stores data using localStorage
- Auto alert checks every minute
- Auto plays alarm sound when it's time

---

## 📷 Screenshots

> (Upload screenshots in GitHub → Issues → Drag + Copy the image URL here)


---

## 🔧 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Service Workers (for offline mode)
- PWA manifest
- GitHub Pages (for free hosting)

---

## 🚀 How to Use It

1. Visit: [https://ezhil-bot.github.io/123](https://ezhil-bot.github.io/123)
2. Choose your role: Doctor / Patient
3. For Doctor:
   - Set reminder time, dosage, patient and caretaker info
4. For Patient:
   - View reminders and receive alerts when it’s time
5. Install the app:
   - On mobile Chrome → “Add to Home Screen”
   - Or install from browser address bar (desktop)

---

## 📂 File Structure

| File               | Purpose                              |
|--------------------|---------------------------------------|
| `index.html`       | UI for both doctor and patient        |
| `style.css`        | Responsive layout and theme           |
| `app.js`           | Handles logic, reminders, alarms      |
| `manifest.json`    | Metadata for PWA installation         |
| `service-worker.js`| Caches app files for offline use      |
| `icon.png`         | App icon for home screen installation |

---

## 🙌 Creator

Made with ❤️ by [@ezhil-bot](https://github.com/ezhil-bot)

---

## 📜 License

MIT License – Free to use, modify, and share.
