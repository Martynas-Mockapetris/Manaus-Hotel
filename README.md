# Manaus Hotel - Viešbučio Svetainė

## 🌟 Apie projektą
Frontend aplikacija sukurta su React, skirta viešbučio paslaugų prezentacijai ir kambarių rezervacijai.

## 🚀 Įdiegimo vadovas
Node.js (v14.0.0+) ir npm.

Projekto paruošimas:
git clone https://github.com/Martynas-Mockapetris/Manaus-Hotel.git
cd Manaus-Hotel
npm install
npm run dev

## 🔧 Problemų sprendimas

Jei projektas nepasileidžia:
rm -rf node_modules package-lock.json
npm install
npm run dev

Jei neveikia stiliai, tailwind.config.js turinys:
```
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Routing konfigūracija App.jsx:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
```
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Kiti maršrutai */}
      </Routes>
    </Router>
  )
}
```
## 🛠️ Technologijos
- React + Vite
- React Router
- Tailwind CSS
- React Icons
- ESLint + Prettier

## 📁 Projekto struktūra
```
src/
├── assets/         # Statiniai failai
├── components/     # UI komponentai
├── pages/         # Puslapių komponentai
├── styles/        # CSS stiliai
└── App.jsx        # Root komponentas
```

## 📋 Komandos
### Paleidžia development serverį
```bash
npm run dev 
```
### Sukuria production build
```bash
npm run build 
```
### Patikrina kodo kokybę
```bash
npm run lint
```
### Peržiūri build versiją
```bash
npm run preview
```
