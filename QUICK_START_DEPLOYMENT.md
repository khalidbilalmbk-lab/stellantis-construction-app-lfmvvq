
# 🚀 Quick Start - Deploy Stellantis Construction App

## Prerequisites Checklist

- [ ] Apple Developer Account ($99/year) - https://developer.apple.com/programs/
- [ ] Google Play Developer Account ($25 one-time) - https://play.google.com/console/signup
- [ ] Expo Account (free) - https://expo.dev/signup

## 5-Step Deployment Process

### Step 1: Install EAS CLI (One-time setup)

```bash
npm install -g eas-cli
```

### Step 2: Login to Expo

```bash
eas login
```

Enter your Expo credentials when prompted.

### Step 3: Configure Your Project

```bash
eas build:configure
```

This will link your project to your Expo account.

### Step 4: Build Your App

**For Android:**
```bash
eas build --platform android --profile production
```

**For iOS:**
```bash
eas build --platform ios --profile production
```

**For Both:**
```bash
eas build --platform all --profile production
```

The build process takes 10-20 minutes. You'll get a link to track progress.

### Step 5: Submit to App Stores

**For Android:**
```bash
eas submit --platform android
```

**For iOS:**
```bash
eas submit --platform ios
```

**For Both:**
```bash
eas submit --platform all
```

## What Happens During Build?

1. ✅ Your code is uploaded to EAS servers
2. ✅ Native Android/iOS projects are generated
3. ✅ App is compiled and signed
4. ✅ Build artifacts (.aab for Android, .ipa for iOS) are created
5. ✅ You receive download links

## What You Need for App Store Submission

### For iOS (Apple App Store):

1. **App Information:**
   - App Name: Stellantis Construction Ltd
   - Category: Business
   - Privacy Policy URL (create one at: https://www.privacypolicygenerator.info/)
   - Support URL: https://www.stellantisconstruction.com

2. **Screenshots:** (Use your phone to take screenshots of the app)
   - At least 3 screenshots per device size
   - iPhone 6.7" (iPhone 14 Pro Max or similar)
   - iPad Pro 12.9"

3. **App Icon:**
   - 1024x1024 PNG (no transparency)

4. **Description:**
   ```
   Stellantis Construction Ltd - Your trusted partner in construction excellence.

   Explore our portfolio of residential, commercial, and data centre projects. 
   Get instant quotes, view our services, and connect with our expert team.

   Features:
   • Browse completed and ongoing projects
   • Request quotes for your construction needs
   • View our comprehensive service offerings
   • Contact us directly via phone, email, or WhatsApp
   • Stay updated with our latest work

   About Stellantis Construction Ltd:
   Based in Staines-upon-Thames, we specialize in construction, design & build, 
   project management, and consultancy services. Led by CEO Bilal Khalid, we 
   deliver quality construction solutions across the UK.
   ```

### For Android (Google Play Store):

1. **App Information:**
   - App Name: Stellantis Construction Ltd
   - Short Description (80 chars): "Professional construction services - Projects, quotes, and expert consultancy"
   - Full Description: (Same as iOS description above)
   - Category: Business

2. **Screenshots:**
   - At least 2 screenshots
   - Phone screenshots (minimum 320px)

3. **Feature Graphic:**
   - 1024x500 PNG or JPEG

4. **App Icon:**
   - 512x512 PNG (32-bit)

## Testing Before Going Live

### iOS TestFlight (Beta Testing):

```bash
eas build --platform ios --profile preview
```

Then invite testers via App Store Connect.

### Android Internal Testing:

```bash
eas build --platform android --profile preview
```

Upload to Google Play Console and create an internal test track.

## Common Issues & Solutions

### Issue: "No bundle identifier found"
**Solution:** Make sure `app.json` has `ios.bundleIdentifier` set to `com.stellantis.construction`

### Issue: "No package name found"
**Solution:** Make sure `app.json` has `android.package` set to `com.stellantis.construction`

### Issue: "Build failed"
**Solution:** Check the build logs in your Expo dashboard for specific errors

### Issue: "Credentials not found"
**Solution:** Run `eas credentials` to set up signing credentials

## After Your App is Live

### Push Updates Without App Store Review:

```bash
eas update --branch production --message "Updated content"
```

This works for JavaScript changes only (UI updates, bug fixes, etc.)

### For Native Changes (New Features):

1. Update version in `app.json`:
   ```json
   "version": "1.0.1",
   "ios": { "buildNumber": "2" },
   "android": { "versionCode": 2 }
   ```

2. Build and submit again:
   ```bash
   eas build --platform all --profile production
   eas submit --platform all
   ```

## Monitoring Your App

- **Expo Dashboard:** https://expo.dev/accounts/[your-account]/projects/stellantis-construction
- **Apple App Store Connect:** https://appstoreconnect.apple.com
- **Google Play Console:** https://play.google.com/console

## Cost Summary

| Service | Cost | Frequency |
|---------|------|-----------|
| Apple Developer Account | $99 | Yearly |
| Google Play Developer | $25 | One-time |
| EAS Build (Free Tier) | $0 | 30 builds/month |
| EAS Build (Paid) | $29 | Monthly (unlimited) |

## Timeline

- **Build Time:** 10-20 minutes per platform
- **iOS Review:** 24-48 hours
- **Android Review:** Few hours to 2 days
- **Total Time to Live:** 2-5 days

## Need Help?

- **EAS Documentation:** https://docs.expo.dev/eas/
- **Expo Forums:** https://forums.expo.dev/
- **Expo Discord:** https://chat.expo.dev/

---

## Ready to Deploy? Run This:

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login
eas login

# 3. Configure
eas build:configure

# 4. Build
eas build --platform all --profile production

# 5. Submit (after build completes)
eas submit --platform all
```

**That's it! Your app will be live in 2-5 days! 🎉**
