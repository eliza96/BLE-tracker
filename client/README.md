# 🖥️ Client – Frontend Application

This is the frontend interface of the BLE Tracker system. It provides a real-time dashboard to monitor incoming data from edge devices, visualize beacon signal strength, and track estimated indoor locations of elderly individuals.

---

## 🛠️ Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- Language: TypeScript / JavaScript
- Styling: Tailwind CSS / CSS Modules
- State Management: React Hooks / Context (if used)

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Overview

| Folder/File     | Description                            |
|------------------|----------------------------------------|
| `/pages`         | Application routes and pages           |
| `/components`    | Reusable UI components                 |
| `/public`        | Static assets (images, icons, etc.)    |
| `/styles`        | Styling configuration                  |

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables

Make sure to create a `.env.local` file with the required keys, for example:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key
```

---

## 🧪 Testing (Optional)

```bash
npm run test
```

> Add unit or integration tests using your preferred test library (e.g., Jest, React Testing Library).

