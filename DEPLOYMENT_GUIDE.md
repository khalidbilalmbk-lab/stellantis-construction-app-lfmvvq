
# 🚀 Deployment Guide - Stellantis Construction Ltd App

This guide will walk you through the process of making your app live on the Apple App Store and Google Play Store using Expo Application Services (EAS).

## Prerequisites

Before you begin, you'll need:

- **Apple Developer Account** ($99/year) - Required for iOS App Store
  - Sign up at: https://developer.apple.com/programs/
  
- **Google Play Developer Account** ($25 one-time fee) - Required for Android Play Store
  - Sign up at: https://play.google.com/console/signup

- **EAS CLI** installed globally on your computer

## Step 1: Install EAS CLI

Open your terminal and run:

```bash
npm install -g eas-cli
```

## Step 2: Login to Your Expo Account

```bash
eas login
```

If you don't have an Expo account, create one at: https://expo.dev/signup

## Step 3: Configure Your Project

Your project already has an `eas.json` file. Make sure your `app.json` has the correct information:

```json
{
  "expo": {
    "name": "Stellantis Construction Ltd",
    "slug": "stellantis-construction",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.stellantis.construction",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.stellantis.construction",
      "versionCode": 1
    }
  }
}
```

## Step 4: Build for Android

### 4.1 Create Android Build

```bash
eas build --platform android
```

This will:
- Generate a production APK/AAB file
- Handle code signing automatically
- Upload the build to EAS servers

### 4.2 Download the Build

Once complete, you can download the `.aab` file from the EAS dashboard or use:

```bash
eas build:download --platform android
```

### 4.3 Submit to Google Play Store

You can submit directly using EAS:

```bash
eas submit --platform android
```

Or manually:
1. Go to https://play.google.com/console
2. Create a new app
3. Upload the `.aab` file
4. Fill in store listing details (description, screenshots, etc.)
5. Submit for review

## Step 5: Build for iOS

### 5.1 Create iOS Build

```bash
eas build --platform ios
```

This will:
- Generate a production IPA file
- Handle provisioning profiles and certificates
- Upload the build to EAS servers

### 5.2 Submit to Apple App Store

You can submit directly using EAS:

```bash
eas submit --platform ios
```

Or manually:
1. Download Xcode from Mac App Store (Mac required)
2. Use Application Loader or Transporter app
3. Upload the `.ipa` file
4. Go to https://appstoreconnect.apple.com
5. Fill in app information and submit for review

## Step 6: Build Both Platforms at Once

```bash
eas build --platform all
```

## App Store Requirements

### iOS App Store Requirements:

1. **App Information:**
   - App name: Stellantis Construction Ltd
   - Subtitle (optional)
   - Category: Business
   - Privacy Policy URL (required)
   - Support URL (required)

2. **Screenshots Required:**
   - iPhone 6.7" Display (1290 x 2796 pixels) - 3-10 screenshots
   - iPhone 6.5" Display (1242 x 2688 pixels) - 3-10 screenshots
   - iPad Pro 12.9" Display (2048 x 2732 pixels) - 3-10 screenshots

3. **App Icon:**
   - 1024 x 1024 pixels (PNG, no transparency)

4. **Description:**
   - Compelling description of your app
   - Keywords for search optimization

5. **Review Time:**
   - Typically 24-48 hours

### Google Play Store Requirements:

1. **App Information:**
   - App name: Stellantis Construction Ltd
   - Short description (80 characters max)
   - Full description (4000 characters max)
   - Category: Business

2. **Screenshots Required:**
   - Phone: 2-8 screenshots (minimum 320px, maximum 3840px)
   - 7-inch tablet: 1-8 screenshots (optional)
   - 10-inch tablet: 1-8 screenshots (optional)

3. **Feature Graphic:**
   - 1024 x 500 pixels (PNG or JPEG)

4. **App Icon:**
   - 512 x 512 pixels (PNG, 32-bit)

5. **Review Time:**
   - Typically a few hours to a few days

## Important Notes

### For Contact Form Functionality:

Your app currently uses `Linking.openURL` to send emails. This will work on devices, but for a production app, you might want to:

1. **Set up a backend API** to handle form submissions
2. **Use Supabase** (if you want a quick backend solution)
3. **Use a service like EmailJS** or **SendGrid** for email handling

### For Push Notifications:

If you want to implement push notifications for project updates:

1. Install expo-notifications:
   ```bash
   npx expo install expo-notifications
   ```

2. Configure push notification credentials in EAS

### Testing Before Release:

1. **Internal Testing (iOS):**
   - Use TestFlight for beta testing
   - Invite up to 10,000 testers

2. **Internal Testing (Android):**
   - Use Google Play Internal Testing
   - Create a test track and invite testers

## Useful Commands

```bash
# Check build status
eas build:list

# View build details
eas build:view [BUILD_ID]

# Configure project
eas build:configure

# Update app (OTA updates after initial release)
eas update

# View credentials
eas credentials
```

## Updating Your App

After your app is live, you can push updates in two ways:

### 1. Over-The-Air (OTA) Updates (for JavaScript/React changes only):

```bash
eas update --branch production --message "Bug fixes and improvements"
```

This updates your app instantly without going through app store review!

### 2. New Build (for native code changes):

```bash
# Increment version in app.json first
eas build --platform all
eas submit --platform all
```

## Cost Breakdown

- **Apple Developer Account:** $99/year
- **Google Play Developer Account:** $25 one-time
- **EAS Build (Free Tier):** 30 builds/month for iOS and Android
- **EAS Build (Production Tier):** $29/month for unlimited builds

## Support & Resources

- **EAS Documentation:** https://docs.expo.dev/eas/
- **EAS Build:** https://docs.expo.dev/build/introduction/
- **EAS Submit:** https://docs.expo.dev/submit/introduction/
- **App Store Connect:** https://appstoreconnect.apple.com/
- **Google Play Console:** https://play.google.com/console/

## Next Steps

1. ✅ Create Apple Developer and Google Play Developer accounts
2. ✅ Install EAS CLI: `npm install -g eas-cli`
3. ✅ Login to Expo: `eas login`
4. ✅ Build your app: `eas build --platform all`
5. ✅ Submit to stores: `eas submit --platform all`
6. ✅ Prepare store listings (screenshots, descriptions, etc.)
7. ✅ Wait for review approval
8. ✅ Your app is LIVE! 🎉

---

**Need Help?**

If you encounter any issues during deployment, you can:
- Check the EAS Build logs in your Expo dashboard
- Visit the Expo forums: https://forums.expo.dev/
- Contact Expo support if you have a paid plan

Good luck with your launch! 🚀
