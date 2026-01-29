# Pixel Checklist 🌸✨

A small, cozy **pixel-inspired checklist / to-do desktop app** built with **Electron + vanilla HTML/CSS/JS**.  
Designed to feel soft, playful, and distraction-free — with a welcoming start screen and a mascot lane at the bottom.

**Repo:** https://github.com/iremboyalioglu/pixel-checklist-app

---

## Highlights

- **Welcome screen → Continue → Checklist**
- Add / delete tasks
- Mark tasks as done
- Filter tasks instantly
- **Mascot lane** (supports an animated GIF)
- Data is stored locally (LocalStorage)

---

## Screens (optional)

_Add screenshots here for portfolio impact:_

- `assets/screenshots/welcome.png`
- `assets/screenshots/todo.png`

```text
![Welcome](assets/screenshots/welcome.png)
![Checklist](assets/screenshots/todo.png)
Tech Stack
Electron (desktop shell)

Vanilla HTML / CSS / JavaScript

LocalStorage (simple persistence)

Build & Release
Releases are published under GitHub Releases (recommended for sharing the .exe):
https://github.com/iremboyalioglu/pixel-checklist-app/releases

Note: Windows SmartScreen warnings may appear because the app is unsigned.

Project Structure
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
Pixel Font (Optional)
The UI supports a pixel font for a stronger retro feel.
If present, it’s expected at:

assets/fonts/PixelFont.ttf
(If a different name is used, the @font-face path in style.css should match.)

Mascot
The mascot is displayed in the bottom lane as an animated GIF:

assets/mascot.gif
Roadmap (Nice-to-have)
Edit tasks (rename)

Categories / tabs (Today / All / Done)

Export / import tasks

Auto-updater via Releases (optional)

License
MIT
