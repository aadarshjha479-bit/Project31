# PROJECT 31

**31 DAYS. ZERO EXCUSES. EXECUTE.**

A mobile-first Class 12 CBSE Commerce execution tracker for October 5–31.

## Included
- TODAY / PLAN / SCORE / SYLLABUS / SETTINGS navigation
- Complete October 5–31 data-driven study plan
- Persistent task completion and scoring in localStorage
- Task points, +15 full-day bonus, and -5 per incomplete task when a past day is settled
- Streak and completion statistics
- 60 original motivational quotes with non-repeating cycle history
- Offline cache and standalone PWA manifest
- Version-aware update checker
- Responsive Android-first UI
- Thomas Shelby background hook: `assets/thomas-shelby.jpg`

## Background image
The supplied Thomas Shelby image was not attached to the build session. To use it, place your legally obtained image at:

`assets/thomas-shelby.jpg`

The CSS already references that exact path. If it is absent, the app falls back to a dark cinematic gradient.

## Run locally
Because service workers and PWA installation require a secure context, use a local HTTP server for development rather than opening `index.html` directly with `file://`.

Example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

`file://` can display the basic page but cannot provide the real service-worker/PWA behavior.

## Install on Android
1. Host the project on an HTTPS site.
2. Open the site in Chrome on Android.
3. Use Chrome's **Install app / Add to Home screen** option when offered.
4. The manifest's `standalone` display makes it launch like an app.

## Online updates
The app uses a versioned service-worker cache. The Settings screen includes **CHECK FOR UPDATES**.

For a new release:
1. Change `APP_VERSION` in `app.js` (for example `1.0.0` → `1.1.0`).
2. Change the cache name in `sw.js` to the same version.
3. Publish the updated files to the same HTTPS host.
4. Users can tap **CHECK FOR UPDATES**. When the new version is detected, **UPDATE NOW** appears.
5. Update reloads the application while localStorage data remains intact.

True PWA installation, service-worker updates, and online self-updating require **HTTPS hosting**. A local `file://` copy cannot self-update online.

## Data persistence
All progress, scores, settled-day records, quote history, quote cycle position, and app settings are stored in localStorage. Updating the application files does not clear them.

## Scoring model
- Normal study task: 25 points
- Practice / mixed / revision task: 25 points
- Full tests: 40 points
- Weak-area / correction work: 20 points
- Final error-list review: 15 points
- Complete every task in a day: +15 bonus
- At the end of a missed day: -5 for each incomplete task

Completed-task points are never removed because another task was missed.

## Architecture
- `index.html` — app shell
- `styles.css` — mobile-first cinematic UI
- `app.js` — data, state, scoring, quote engine, rendering, updates
- `manifest.json` — PWA metadata
- `sw.js` — offline cache/update worker
- `icons/icon.svg` — app icon
- `assets/thomas-shelby.jpg` — user-supplied background image slot

No backend is required.


## Visual assets
- `assets/thomas-shelby.jpg` is the exact background image supplied for PROJECT 31.
- `icons/icon-192.png` and `icons/icon-512.png` use the PROJECT 31 mission icon artwork.
- v1.0.2 fixes the background stacking layer so the supplied background remains visible behind the dark overlay.
