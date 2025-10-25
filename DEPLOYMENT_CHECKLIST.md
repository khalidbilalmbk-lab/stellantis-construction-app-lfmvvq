
# ✅ Deployment Checklist - Stellantis Construction Ltd

Use this checklist to track your progress in deploying the app to production.

## Phase 1: Pre-Deployment Setup

### Developer Accounts
- [ ] Create Apple Developer Account ($99/year)
  - URL: https://developer.apple.com/programs/
  - Estimated time: 15 minutes + approval time (1-2 days)
  
- [ ] Create Google Play Developer Account ($25 one-time)
  - URL: https://play.google.com/console/signup
  - Estimated time: 15 minutes + approval time (few hours)
  
- [ ] Create Expo Account (Free)
  - URL: https://expo.dev/signup
  - Estimated time: 2 minutes

### Development Environment
- [ ] Install Node.js (if not already installed)
  - URL: https://nodejs.org/
  
- [ ] Install EAS CLI globally
  ```bash
  npm install -g eas-cli
  ```
  
- [ ] Login to Expo
  ```bash
  eas login
  ```

## Phase 2: App Configuration

### Update App Information
- [ ] Update `app.json` with correct app name
  - Current: "Stellantis Construction Ltd" ✅
  
- [ ] Update bundle identifier (iOS)
  - Current: "com.stellantis.construction" ✅
  
- [ ] Update package name (Android)
  - Current: "com.stellantis.construction" ✅
  
- [ ] Update app version
  - Current: "1.0.0" ✅
  
- [ ] Update app icon
  - Location: `./assets/images/natively-dark.png`
  - [ ] Replace with Stellantis logo (1024x1024 PNG)

### Configure EAS Build
- [ ] Run EAS build configuration
  ```bash
  eas build:configure
  ```
  
- [ ] Verify `eas.json` is properly configured ✅

## Phase 3: Prepare App Store Assets

### Create App Icon
- [ ] Design app icon (1024x1024 PNG)
  - No transparency
  - Stellantis branding
  - Professional look
  
- [ ] Test icon on different backgrounds
- [ ] Save as `./assets/images/app-icon.png`

### Take Screenshots

#### iOS Screenshots Needed:
- [ ] iPhone 6.7" (1290x2796) - Home screen
- [ ] iPhone 6.7" (1290x2796) - Projects screen
- [ ] iPhone 6.7" (1290x2796) - Services screen
- [ ] iPhone 6.7" (1290x2796) - Contact form
- [ ] iPhone 6.7" (1290x2796) - About us screen
- [ ] iPad Pro 12.9" (2048x2732) - Home screen
- [ ] iPad Pro 12.9" (2048x2732) - Projects screen

#### Android Screenshots Needed:
- [ ] Phone (minimum 320px width) - Home screen
- [ ] Phone (minimum 320px width) - Projects screen
- [ ] Phone (minimum 320px width) - Services screen
- [ ] Phone (minimum 320px width) - Contact form

### Create Feature Graphic (Android)
- [ ] Design feature graphic (1024x500 PNG/JPEG)
  - Stellantis branding
  - Eye-catching design
  - Include app name

### Write App Store Content
- [ ] App description (see APP_STORE_LISTING.md) ✅
- [ ] Short description for Google Play ✅
- [ ] Keywords for ASO ✅
- [ ] What's New text ✅
- [ ] Screenshot captions ✅

### Legal Documents
- [ ] Create Privacy Policy
  - Use: https://www.privacypolicygenerator.info/
  - Host on: www.stellantisconstruction.com/privacy-policy
  
- [ ] Create Terms of Service (optional but recommended)
  - Host on: www.stellantisconstruction.com/terms-of-service

## Phase 4: Build the App

### Test Locally First
- [ ] Test app on iOS simulator
  ```bash
  npm run ios
  ```
  
- [ ] Test app on Android emulator
  ```bash
  npm run android
  ```
  
- [ ] Test all features:
  - [ ] Navigation works
  - [ ] Contact form opens email
  - [ ] Phone numbers dial correctly
  - [ ] WhatsApp link works
  - [ ] Website link opens
  - [ ] All images load
  - [ ] No crashes

### Create Production Builds

#### Android Build
- [ ] Start Android production build
  ```bash
  eas build --platform android --profile production
  ```
  
- [ ] Wait for build to complete (10-20 minutes)
- [ ] Download .aab file
- [ ] Test .aab file if possible

#### iOS Build
- [ ] Start iOS production build
  ```bash
  eas build --platform ios --profile production
  ```
  
- [ ] Wait for build to complete (10-20 minutes)
- [ ] Download .ipa file
- [ ] Test .ipa file if possible

## Phase 5: App Store Submission

### Apple App Store

#### App Store Connect Setup
- [ ] Go to https://appstoreconnect.apple.com
- [ ] Click "My Apps"
- [ ] Click "+" to create new app
- [ ] Fill in app information:
  - [ ] Name: Stellantis Construction Ltd
  - [ ] Primary Language: English (UK)
  - [ ] Bundle ID: com.stellantis.construction
  - [ ] SKU: stellantis-construction-001
  
#### Upload Build
- [ ] Submit iOS build via EAS
  ```bash
  eas submit --platform ios
  ```
  OR
- [ ] Upload .ipa manually via Transporter app

#### Complete App Information
- [ ] Upload app icon (1024x1024)
- [ ] Upload screenshots (all required sizes)
- [ ] Enter app description
- [ ] Enter keywords
- [ ] Enter support URL
- [ ] Enter privacy policy URL
- [ ] Select category: Business
- [ ] Set content rating: 4+
- [ ] Enter copyright: © 2024 Stellantis Construction Ltd
- [ ] Add contact information
- [ ] Set pricing: Free

#### Submit for Review
- [ ] Review all information
- [ ] Click "Submit for Review"
- [ ] Wait for Apple review (24-48 hours)
- [ ] Respond to any feedback from Apple

### Google Play Store

#### Google Play Console Setup
- [ ] Go to https://play.google.com/console
- [ ] Click "Create app"
- [ ] Fill in app details:
  - [ ] App name: Stellantis Construction Ltd
  - [ ] Default language: English (United Kingdom)
  - [ ] App or game: App
  - [ ] Free or paid: Free
  
#### Upload Build
- [ ] Submit Android build via EAS
  ```bash
  eas submit --platform android
  ```
  OR
- [ ] Upload .aab manually in Play Console

#### Complete Store Listing
- [ ] Upload app icon (512x512)
- [ ] Upload feature graphic (1024x500)
- [ ] Upload screenshots (minimum 2)
- [ ] Enter short description (80 chars)
- [ ] Enter full description
- [ ] Select category: Business
- [ ] Add contact details
- [ ] Enter privacy policy URL
- [ ] Set content rating (complete questionnaire)

#### Complete App Content
- [ ] Privacy policy
- [ ] App access (no restrictions)
- [ ] Ads (no ads)
- [ ] Content rating
- [ ] Target audience
- [ ] News app (no)

#### Set Up Pricing & Distribution
- [ ] Select countries (all or specific)
- [ ] Confirm free app
- [ ] Accept content guidelines

#### Submit for Review
- [ ] Review all information
- [ ] Click "Send for review"
- [ ] Wait for Google review (few hours to 2 days)
- [ ] Respond to any feedback from Google

## Phase 6: Post-Launch

### Monitor Reviews
- [ ] Set up App Store Connect notifications
- [ ] Set up Google Play Console notifications
- [ ] Respond to user reviews within 24 hours
- [ ] Address any reported issues

### Track Analytics
- [ ] Monitor download numbers
- [ ] Track user engagement
- [ ] Monitor crash reports
- [ ] Check performance metrics

### Marketing
- [ ] Announce app launch on website
- [ ] Share on social media
- [ ] Email existing clients
- [ ] Add app links to email signature
- [ ] Create QR codes for app download
- [ ] Add app badges to website

### Maintenance
- [ ] Set up monitoring for app crashes
- [ ] Plan regular updates
- [ ] Collect user feedback
- [ ] Fix bugs promptly
- [ ] Add new features based on feedback

## Phase 7: Updates & Improvements

### Regular Updates (Every 2-4 weeks)
- [ ] Fix reported bugs
- [ ] Improve performance
- [ ] Update content
- [ ] Add new features

### OTA Updates (For minor changes)
```bash
eas update --branch production --message "Bug fixes and improvements"
```

### Full Updates (For major changes)
1. [ ] Update version in app.json
2. [ ] Build new version
3. [ ] Submit to app stores
4. [ ] Wait for approval

## Emergency Contacts

**Expo Support:**
- Forums: https://forums.expo.dev/
- Discord: https://chat.expo.dev/
- Docs: https://docs.expo.dev/

**Apple Support:**
- App Store Connect: https://appstoreconnect.apple.com/
- Developer Support: https://developer.apple.com/support/

**Google Support:**
- Play Console: https://play.google.com/console/
- Developer Support: https://support.google.com/googleplay/android-developer/

## Estimated Timeline

| Phase | Duration |
|-------|----------|
| Developer Account Setup | 1-2 days |
| App Configuration | 1-2 hours |
| Asset Preparation | 2-4 hours |
| Building | 30-40 minutes |
| Store Submission | 1-2 hours |
| Review Process | 1-5 days |
| **Total Time to Live** | **3-7 days** |

## Budget Tracker

| Item | Cost | Status |
|------|------|--------|
| Apple Developer Account | $99/year | [ ] Paid |
| Google Play Developer | $25 one-time | [ ] Paid |
| EAS Build (optional) | $0-29/month | [ ] Free tier |
| App Icon Design | $0-100 | [ ] Done |
| **Total Initial Cost** | **$124-253** | |

---

## Quick Command Reference

```bash
# Login to Expo
eas login

# Configure project
eas build:configure

# Build for both platforms
eas build --platform all --profile production

# Submit to both stores
eas submit --platform all

# Check build status
eas build:list

# Push OTA update
eas update --branch production --message "Your update message"
```

---

**Progress Tracker:**
- [ ] Phase 1: Pre-Deployment Setup (0/3)
- [ ] Phase 2: App Configuration (4/5)
- [ ] Phase 3: Prepare Assets (1/8)
- [ ] Phase 4: Build the App (0/8)
- [ ] Phase 5: App Store Submission (0/30)
- [ ] Phase 6: Post-Launch (0/12)
- [ ] Phase 7: Updates (0/8)

**Overall Progress: 5/74 tasks completed (7%)**

---

🎉 **You're on your way to launching your app!** 🎉

Follow this checklist step by step, and you'll have your app live in the app stores within a week!
