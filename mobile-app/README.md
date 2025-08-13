# Canada Cost Analyzer - Mobile App

This is the React Native version of the Canada Cost Analyzer, built with Expo for easy deployment to Google Play Store.

## 🚀 Quick Start

### Prerequisites
- Node.js (14 or higher)
- Expo CLI: `npm install -g @expo/cli`
- For Android builds: Android Studio or Expo EAS Build

### Development
```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on Android emulator
npm run android

# Run on web (for testing)
npm run web
```

## 📱 Building for Android

### Option 1: EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build APK for Google Play
eas build --platform android --profile production
```

### Option 2: Local Build
```bash
# Install Expo CLI
npm install -g @expo/cli

# Build locally (requires Android Studio)
expo run:android --variant release
```

## 🏪 Publishing to Google Play

1. **Build Production APK/AAB:**
   ```bash
   eas build --platform android --profile production
   ```

2. **Download the APK/AAB** from Expo dashboard

3. **Upload to Google Play Console:**
   - Create new app listing
   - Upload the APK/AAB file
   - Fill in app details, descriptions, screenshots
   - Submit for review

## 📋 App Details

- **App Name:** Canada Cost Analyzer
- **Package:** com.canadacostanalyzer.app
- **Version:** 1.0.0
- **Target:** Android API 34
- **Features:**
  - Cost of living calculator
  - 11 Canadian cities
  - Household size calculator
  - Income target recommendations

## 🔧 Configuration

The app is configured in `app.json`:
- App name and package ID
- Icons and splash screen
- Android-specific settings
- Build configurations

## 📁 Project Structure

```
mobile-app/
├── src/
│   └── components/
│       ├── Header.tsx
│       └── CostCalculator.tsx
├── App.tsx
├── app.json
└── package.json
```

## 🎯 Next Steps for Google Play

1. **Test the app thoroughly**
2. **Create app store assets** (icons, screenshots, descriptions)
3. **Set up Google Play Console account**
4. **Build production APK with EAS**
5. **Upload and publish**

## 🆘 Troubleshooting

- **Build issues:** Make sure all dependencies are installed
- **Android emulator:** Ensure Android Studio is properly configured
- **EAS Build:** Check Expo account and project configuration

---

**Original Web App:** The web version is still available in the parent directory (`../src/`)