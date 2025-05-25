# 💊 Smart Pill Reminder

A simple Progressive Web App (PWA) to help doctors schedule pill reminders for patients, and notify them when it's time to take their medicine — complete with audio alarms and local storage support.

---

## 🚀 Features

- 👨‍⚕️ **Doctor Dashboard** to add medicine reminders for patients  
- 👩‍⚕️ **Patient Dashboard** to receive timely alerts  
- 🔔 Local audio alert when it's time to take medicine  
- 📦 **LocalStorage-based** data storage (no backend required)  
- ⚙️ Works **offline** with Service Worker support  
- 📱 Installable as a **PWA** (Add to Home Screen)  
- 🎨 Simple and responsive UI  

---

## 📸 Screenshots

| Login Screen | Doctor Panel | Patient Panel |
|--------------|--------------|----------------|
| ![Login](./screenshots/login.png) | ![Doctor](./screenshots/doctor.png) | ![Patient](./screenshots/patient.png) |

---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (Vanilla)
- [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- PWA (Manifest + Icons)
- LocalStorage API

---

## 📂 Project Structure

```
smart-pill-reminder/
│
├── index.html
├── style.css
├── app.js
├── manifest.json
├── service-worker.js
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── screenshots/
    ├── login.png
    ├── doctor.png
    └── patient.png
```

---

## 🔧 Setup & Run

1. **Clone this repository:**

```bash
git clone https://github.com/yourusername/smart-pill-reminder.git
cd smart-pill-reminder
```

2. **Open `index.html` in your browser.**  
   Optionally, you can serve it via a local server:

```bash
npx serve .
```

3. ✅ Done! Use it as a doctor or patient.

---

## 📱 Add to Home Screen (PWA)

- Open the app in a mobile browser (e.g., Chrome).
- Click the “Add to Home Screen” prompt.
- Use it like a native app.

---

## ⚠️ Limitations

- Reminders are stored **locally**; not synced between devices.
- No backend; data will reset if browser storage is cleared.

---

## 🙌 Acknowledgments

- Google Material Icons & Sounds  
- MDN Web Docs  
- Open Source inspiration from PWA community  

---

## 📃 License

MIT License  
© 2025 [Your Name]
