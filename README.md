# Wellness Tracker (React + Vite)

A wellness tracking app to log daily steps, sleep, mood, and notes — with charts and CSV/PDF export.

## Quick Start

```bash
npm install
npm run dev
```

## Features
- Dummy auth (email/password) stored in LocalStorage
- Dark mode toggle
- Add/Edit/Delete daily entries (steps, sleep, mood, notes)
- Weekly progress line chart (Chart.js)
- Export entries to CSV or PDF
- Responsive UI with Tailwind CSS
- Client-side routing
- Per-user persistence: entries are saved under `entries_<email>` key

## Build
```bash
npm run build
npm run preview
```
