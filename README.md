# 🏥 Hospital Management System

A front-end Hospital Management System web app built with **HTML, CSS, and JavaScript**. It simulates core hospital workflows — patient login, doctor listings, appointment booking, and contact/enquiry handling — entirely in the browser using `localStorage`/`sessionStorage` (no backend required).

🔗 **Live Demo:** [Add your GitHub Pages link here after deployment]

## ✨ Features

- **Login-gated navigation** — Doctors, Appointment, Services, and Gallery pages are locked until the user logs in (session-based).
- **Appointment Booking** — Patients can book appointments through a validated form; bookings are stored locally so they persist across page loads.
- **Contact Form** — Enquiry form with email format validation.
- **Doctors, Services & Gallery pages** — Browse hospital staff, offerings, and a photo gallery.
- **Responsive layout** with a clean, hospital-themed UI (Font Awesome icons).

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (DOM APIs, `localStorage`, `sessionStorage`)
- Font Awesome (via CDN)

## 📁 Project Structure

```
├── index.html          # Redirects to HTML/index.html (for GitHub Pages)
├── HTML/                # All page templates
├── CSS/                 # Stylesheet(s)
├── JS/                  # Page scripts (login, appointments, contact form, nav)
└── Img/                 # Images & icons
```

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/HarshSri1214/Hospital_Management_System.git
   cd Hospital_Management_System
   ```
2. Open `HTML/index.html` directly in your browser, or serve the folder with a simple local server (recommended, so relative paths behave the same as in production):
   ```bash
   npx serve .
   ```
3. Log in with the demo credentials in `JS/IndexPage.js` to unlock the protected pages.

## ⚠️ Note on Authentication

Login is handled entirely client-side with a hardcoded username/password for demo purposes only. There is no real backend, database, or encryption — **do not use this as-is for a production system handling real patient data.**

## 📌 Possible Improvements

- Replace hardcoded login with a real backend (Node/Express + database) and proper authentication.
- Move appointment data from `localStorage` to a database with an API.
- Add doctor-side dashboard for managing appointments.
- Form validation feedback improvements (inline errors instead of `alert()`).

## 📄 License

This project is open source — feel free to fork and build on it.
