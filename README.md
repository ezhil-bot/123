# Smart Pill Reminder

A simple Progressive Web App (PWA) that helps doctors set medication reminders for patients and reminds patients when to take their medicine.

## Features

- Doctor and Patient login roles
- Doctors can add multiple medicine reminders for patients
- Reminders stored locally with browser `localStorage`
- Patient receives alerts with sound when it's time for medication
- Service worker caches app files for offline usage
- App manifest enables installation on devices with home screen icon

## Setup

1. Clone or download the repo
2. Place `icon-192.png` and `icon-512.png` inside the `icons` folder
3. Open `index.html` in a modern browser or serve it via a static server
4. Register as a Doctor or Patient and start using

## Notes

- Reminders are stored locally and work only in the browser
- Service worker enables offline support
- Alarm sound is loaded from Google Actions sound library

---

Made by Ezhilarasan M T
