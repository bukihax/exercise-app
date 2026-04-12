# Exercise Tracker

A mobile-first exercise tracking app built with **Expo** and **React Native**. Try it instantly in your browser, or run it locally on your phone or computer.

---

## What the App Does

The app helps you track two kinds of exercises:

| Exercise Type | Examples | What You Track |
|---|---|---|
| **Repetition** | Push-Ups, Sit-Ups, Squats | Count your reps with a tap |
| **Duration** | Plank, Wall Sit | Start/stop a live timer |

After each exercise, the app suggests the next one to keep your workout flowing.

---

## Option 1 — Try It in the Browser via GitHub Pages

The app is deployed to the `gh-pages` branch, but GitHub Pages must be **enabled** in the repository settings before the link works. Follow these steps once:

### Step 1 — Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/bukihax/exercise-app`
2. Click the **Settings** tab (near the top of the page)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment → Source**, select **Deploy from a branch**
5. Under **Branch**, choose `gh-pages` and leave the folder as `/ (root)`
6. Click **Save**

GitHub will show a message like *"Your site is being built."* Wait about 1–2 minutes.

### Step 2 — Open the Live Site

Once GitHub Pages is enabled, visit:

**[https://bukihax.github.io/exercise-app](https://bukihax.github.io/exercise-app)**

> Works on desktop, tablet, and mobile browsers.

> **Note:** If you see a 404 page, wait another minute and refresh — GitHub Pages can take a moment to go live after the first enable.

---

## Option 2 — Run It Locally

Follow these steps one at a time.

### Step 1 — Check Your Prerequisites

You need these installed before starting:

- **Node.js** (version 18 or newer) — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)

Check if you have them by running:

```bash
node --version
npm --version
```

Both commands should print a version number. If they do, move to Step 2.

---

### Step 2 — Clone the Repository

```bash
git clone https://github.com/bukihax/exercise-app.git
cd exercise-app
```

---

### Step 3 — Install Dependencies

```bash
npm install
```

This downloads all the packages the app needs. It may take a minute.

---

### Step 4 — Start the App

You have three ways to run it depending on what you want to test:

#### A) In the browser (easiest)

```bash
npx expo start --web
```

Then open [http://localhost:8081](http://localhost:8081) in your browser.

#### B) On your phone with Expo Go

1. Install the **Expo Go** app on your phone:
   - [iOS – App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android – Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Run `npx expo start` in your terminal
3. Scan the QR code shown in the terminal with your phone camera (iOS) or the Expo Go app (Android)

#### C) On an emulator/simulator

- **Android**: Start Android Studio's emulator first, then run `npx expo start --android`
- **iOS** (Mac only): Run `npx expo start --ios`

---

## How to Use the App

Here is what to expect once the app is open:

**Step 1 — Home Screen**
You will see a list of five exercises. Tap any one to begin.

**Step 2 — Repetition Exercises** (Push-Ups, Sit-Ups, Squats)
- Tap **Add Rep** each time you complete one repetition
- Your rep count updates live on screen
- Tap **Reset** to start counting from zero again

**Step 3 — Duration Exercises** (Plank, Wall Sit)
- Tap **Start** when you begin the exercise — the timer counts up
- Tap **Stop** to pause it
- Tap **Reset** to clear the timer back to 0:00

**Step 4 — Suggested Next Exercise**
After any exercise, tap the **Suggested:** button to jump straight to the recommended next exercise without going back to the home screen.

**Step 5 — Going Back**
Tap **Home** from any exercise screen to return to the exercise list.

---

## Project Structure

```
exercise-app/
├── App.js                          # Navigation setup (Home → Exercise screens)
├── app.json                        # Expo configuration
├── package.json                    # Dependencies and scripts
├── assets/                         # App icons and splash screen
└── src/
    ├── components/
    │   ├── Home/index.js           # Exercise list screen
    │   ├── RepetitionExercise/     # Rep counter screen
    │   └── DurationExercise/       # Timer screen
    └── data/
        └── exercises.js            # Exercise data (name, type, suggestions)
```

---

## Available Scripts

| Command | What it does |
|---|---|
| `npx expo start` | Start the Expo dev server |
| `npx expo start --web` | Open in browser |
| `npx expo start --android` | Open on Android emulator |
| `npx expo start --ios` | Open on iOS simulator (Mac only) |
| `npm test` | Run the test suite |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Adding New Packages

> **Important:** Always use `npx expo install` instead of `npm install` when adding packages to this project.

```bash
# Do this ✅
npx expo install some-package

# Not this ❌
npm install some-package
```

**Why?** Expo manages exact versions of React, React Native, and related packages. Using `npm install` can upgrade React to a version that doesn't match React Native's renderer, which crashes the app. `npx expo install` always picks the version that is compatible with the current Expo SDK.

---

## Troubleshooting

### "Incompatible React versions" error in Expo Go

This means your installed `react` version drifted out of sync with `react-native`. Fix it with:

```bash
npx expo install --check
```

This prints which packages are on the wrong version. Then run:

```bash
npx expo install react
```

Expo will downgrade (or upgrade) React to the exact version the current SDK requires.

---

## Tech Stack

- [Expo](https://expo.dev) — cross-platform React Native framework
- [React Native](https://reactnative.dev) — mobile UI components
- [React Navigation](https://reactnavigation.org) — screen navigation
- [RNEUI](https://reactnativeelements.com) — UI component library
