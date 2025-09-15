# FlightsandFeelings - Complete Setup Guide

## 🚀 Project Overview

FlightsandFeelings is a cross-platform mobile dating app for airports that connects travelers in real-time while they're physically at airports. This guide will help you set up and test the complete SMS OTP authentication system.

## ✅ What's Been Completed

### Core Authentication Flow
- ✅ Phone number input with validation
- ✅ SMS OTP verification via Firebase Auth
- ✅ Profile creation for new users
- ✅ Landing page for authenticated users
- ✅ Complete navigation between screens
- ✅ Error handling and loading states
- ✅ TypeScript integration with proper types
- ✅ All linting issues resolved

### Project Structure
```
src/
├── components/
│   └── AuthNavigator.tsx      # Main navigation controller
├── screens/
│   ├── PhoneAuthScreen.tsx    # Phone number input
│   ├── OTPVerificationScreen.tsx # SMS code verification
│   ├── ProfileSetupScreen.tsx # New user profile creation
│   └── LandingScreen.tsx      # Post-authentication screen
├── services/
│   └── firebase.ts            # Firebase integration
├── types/
│   └── index.ts              # TypeScript interfaces
└── utils/
    └── validation.ts         # Phone/OTP validation
```

### Configuration Files
- ✅ `firebase.json` - Firebase project configuration
- ✅ `.env.example` - Environment variables template
- ✅ Package dependencies installed and configured

## 🔧 Required Setup Steps

### 1. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project named "flightsandfeelings-dev" (or update firebase.json)
3. Enable Authentication → Sign-in method → Phone
4. Enable Firestore Database
5. Download configuration files:
   - `google-services.json` → place in `android/app/`
   - `GoogleService-Info.plist` → place in `ios/FlightsandFeelingsApp/`

### 2. Environment Configuration
1. Copy `.env.example` to `.env`
2. Fill in your Firebase credentials:
```env
FIREBASE_PROJECT_ID=your-actual-project-id
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
```

### 3. Development Environment
Ensure you have:
- Node.js >= 20
- React Native CLI: `npm install -g @react-native-community/cli`
- Android Studio with Android SDK (for Android testing)
- Xcode (for iOS testing, macOS only)

### 4. Install Dependencies
```bash
npm install
cd ios && pod install && cd ..  # iOS only
```

## 🧪 Testing Instructions

### Start Development Server
```bash
npm start
```

### Test on iOS (macOS only)
```bash
npm run ios
```

### Test on Android
```bash
npm run android
```

### Manual Testing Checklist
1. **Phone Input Screen**
   - [ ] Enter valid phone number (e.g., +1234567890)
   - [ ] Verify validation works for invalid numbers
   - [ ] Check loading state when sending OTP

2. **OTP Verification Screen**
   - [ ] Receive SMS with 6-digit code
   - [ ] Enter correct code → should proceed to profile
   - [ ] Enter wrong code → should show error
   - [ ] Test resend functionality

3. **Profile Setup Screen**
   - [ ] Fill in name, age, bio
   - [ ] Select gender and preferences
   - [ ] Save profile → should go to landing page

4. **Landing Screen**
   - [ ] Shows welcome message with user name
   - [ ] Sign out button works
   - [ ] Profile information displays correctly

## 🔍 Troubleshooting

### SMS Not Sending
- Verify Firebase Phone Auth is enabled
- Check Firebase project configuration
- Ensure phone number format is correct (+1234567890)
- Test with a real phone number (not simulator)

### Build Errors
- Run `npm run lint` to check for code issues
- Verify all dependencies are installed
- Check Android SDK path is set (ANDROID_HOME)
- For iOS: ensure Xcode is properly installed

### Firebase Connection Issues
- Verify `google-services.json` and `GoogleService-Info.plist` are in correct locations
- Check Firebase project ID matches in all config files
- Ensure Firestore rules allow read/write for authenticated users

## 🚀 Next Development Steps

1. **Test SMS Flow**: Verify end-to-end authentication works
2. **UI Polish**: Customize colors, fonts, and branding
3. **GPS Integration**: Add airport geofencing
4. **Premium Features**: Implement Layover Plus features
5. **App Store Prep**: Configure for TestFlight/Play Store

## 📱 Key Features Ready for Testing

- **Secure Authentication**: SMS OTP prevents fake accounts
- **User Profiles**: Basic profile creation and storage
- **Navigation**: Smooth flow between authentication screens
- **Error Handling**: Comprehensive error messages and validation
- **TypeScript**: Full type safety throughout the app
- **Responsive UI**: Clean, mobile-first design

## 🔒 Security Features

- Phone number validation and formatting
- Firebase security rules for Firestore
- Input sanitization and validation
- Secure authentication state management
- Ready for Twilio Lookup API integration (carrier validation)

---

**The app is ready for Firebase configuration and testing! 🎉**
