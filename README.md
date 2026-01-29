# Pixel Checklist 🌸✨

A cozy, pixel-inspired **checklist / to-do desktop app** built with **Electron + vanilla HTML/CSS/JS**.  
Designed to feel soft, playful, and distraction-free — with a welcome screen and a mascot lane.

---

## Highlights
- Welcome screen → Continue → Checklist
- Add / delete tasks
- Mark tasks as done
- Filter tasks instantly
- Mascot lane (supports an animated GIF)
- Data is stored locally (LocalStorage)

---

## Tech Stack
- Electron (desktop shell)
- Vanilla HTML / CSS / JavaScript
- LocalStorage (simple persistence)

---

## Releases
Windows builds are published under **GitHub Releases**:  
https://github.com/iremboyalioglu/pixel-checklist-app/releases

> Note: Windows SmartScreen warnings may appear because the app is unsigned.

---

## Project Structure
```text
pixel-checklist-app/
  assets/
    mascot.gif
    fonts/
      PixelFont.ttf   (optional)
  main.js
  preload.js
  index.html
  style.css
  renderer.js
  package.json
Mascot
The mascot is loaded from:

assets/mascot.gif
and displayed in the bottom lane on the checklist screen.

Pixel Font (Optional)
For a stronger pixel feel, the UI supports a font at:

assets/fonts/PixelFont.ttf
(If you use a different name, update the @font-face path in style.css.)

License
MIT
