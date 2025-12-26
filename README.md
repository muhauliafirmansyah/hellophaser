# Hello Phaser Template

A clean, production-ready template for building cross-platform 2D games using **Phaser 3**, **Vite**, and **Capacitor**. This template is pre-configured for mobile development with Android support.

## Features

*   **Phaser 3**: The latest version of the powerful 2D game framework.
*   **Vite**: Fast development server and bundler.
*   **Capacitor**: Native runtime for building web apps into mobile apps.
*   **Responsive**: Logic to handle mobile scaling (landscape/portrait).
*   **Clean Slate**: Minimal code in `MainScene.js` to start fresh.

## Getting Started

### Prerequisites

*   **Node.js**: Install the latest LTS version.
*   **Android Studio**: Required for building and deploying to Android devices.

### Installation

1.  Clone this repository or use it as a template.
2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

Run the local development server:

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Web

To create a production build in the `dist` folder:

```bash
npm run build
```

## Mobile Deployment (Android)

### Initial Setup

(If you haven't already, add the android platform - note this template already includes it, but `npx cap sync` is good practice).

```bash
npx cap sync
```

### Running on Device/Emulator

You can open the project in Android Studio to build and run:

```bash
npx cap open android
```

### Quick Build Script (Windows)

A batch script is included to automate building the web assets, syncing with Capacitor, and assembling the debug APK.

```bash
.\apk-deploy.bat
```

The APK will be generated in `android/app/build/outputs/apk/debug/`.

## mostly-static Files

*   `src/MainScene.js`: The main entry point for your game logic.
*   `src/main.js`: Game configuration and initialization.
*   `capacitor.config.json`: Capacitor configuration (App ID, App Name).
