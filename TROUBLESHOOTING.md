
# 🔧 Troubleshooting Guide - Common Deployment Issues

This guide covers common issues you might encounter when deploying your Stellantis Construction app and how to fix them.

## EAS CLI Issues

### Issue: "eas: command not found"

**Problem:** EAS CLI is not installed or not in PATH.

**Solution:**
```bash
# Install EAS CLI globally
npm install -g eas-cli

# Verify installation
eas --version

# If still not working, try with npx
npx eas-cli login
```

### Issue: "You are not logged in"

**Problem:** Not authenticated with Expo.

**Solution:**
```bash
# Login to Expo
eas login

# Verify login
eas whoami
```

### Issue: "Project not configured"

**Problem:** Project hasn't been linked to Expo account.

**Solution:**
```bash
# Configure the project
eas build:configure

# This will create/update eas.json and link to your account
```

## Build Issues

### Issue: "Build failed: No bundle identifier found"

**Problem:** iOS bundle identifier is missing or incorrect in app.json.

**Solution:**
```json
// In app.json, make sure you have:
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.stellantis.construction"
    }
  }
}
```

### Issue: "Build failed: No package name found"

**Problem:** Android package name is missing or incorrect in app.json.

**Solution:**
```json
// In app.json, make sure you have:
{
  "expo": {
    "android": {
      "package": "com.stellantis.construction"
    }
  }
}
```

### Issue: "Build failed: Invalid app.json"

**Problem:** Syntax error in app.json.

**Solution:**
1. Validate your JSON at https://jsonlint.com/
2. Check for:
   - Missing commas
   - Extra commas
   - Unclosed brackets
   - Incorrect quotes

### Issue: "Build failed: Metro bundler error"

**Problem:** JavaScript bundling failed.

**Solution:**
```bash
# Clear Metro cache
npx expo start --clear

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
eas build --platform android --profile production
```

### Issue: "Build failed: Out of memory"

**Problem:** Build process ran out of memory.

**Solution:**
1. Optimize images (compress large images)
2. Remove unused dependencies
3. Use EAS Build's larger build machines (paid plan)

### Issue: "Build stuck at 'Uploading to EAS Build'"

**Problem:** Large project or slow internet connection.

**Solution:**
1. Wait patiently (can take 5-10 minutes for large projects)
2. Check your internet connection
3. Add `.easignore` file to exclude unnecessary files:

```
# .easignore
node_modules/
.expo/
.git/
*.log
.DS_Store
```

## Credential Issues

### Issue: "No credentials found"

**Problem:** iOS/Android signing credentials not set up.

**Solution:**
```bash
# Let EAS manage credentials automatically
eas build --platform ios --profile production

# Or manually configure
eas credentials
```

### Issue: "Invalid provisioning profile"

**Problem:** iOS provisioning profile issues.

**Solution:**
```bash
# Reset credentials
eas credentials

# Select iOS
# Select "Remove all credentials"
# Build again (EAS will create new credentials)
eas build --platform ios --profile production
```

### Issue: "Keystore not found"

**Problem:** Android keystore missing.

**Solution:**
```bash
# Let EAS generate a new keystore
eas build --platform android --profile production

# EAS will automatically create and manage the keystore
```

## Submission Issues

### Issue: "eas submit failed: No build found"

**Problem:** Trying to submit before build is complete.

**Solution:**
```bash
# Check build status
eas build:list

# Wait for build to complete, then submit
eas submit --platform android
```

### Issue: "Apple ID authentication failed"

**Problem:** Apple credentials incorrect or 2FA issue.

**Solution:**
1. Use app-specific password for Apple ID with 2FA
2. Generate at: https://appleid.apple.com/account/manage
3. Use this password when prompted by EAS

### Issue: "Google Play: App not found"

**Problem:** App not created in Google Play Console yet.

**Solution:**
1. Go to https://play.google.com/console
2. Create app manually first
3. Then run `eas submit --platform android`

### Issue: "Invalid bundle: Missing required icon"

**Problem:** App icon not properly configured.

**Solution:**
```json
// In app.json, ensure icon path is correct:
{
  "expo": {
    "icon": "./assets/images/app-icon.png"
  }
}
```

Make sure the icon file exists and is 1024x1024 PNG.

## App Store Rejection Issues

### Issue: "App rejected: Incomplete information"

**Problem:** Missing required information in App Store Connect.

**Solution:**
1. Check all required fields are filled:
   - App description
   - Screenshots (all required sizes)
   - Privacy policy URL
   - Support URL
   - Contact information
2. Resubmit for review

### Issue: "App rejected: Crashes on launch"

**Problem:** App crashes during Apple's testing.

**Solution:**
1. Test on real iOS device
2. Check crash logs in App Store Connect
3. Fix the issue
4. Build new version
5. Resubmit

### Issue: "App rejected: Misleading description"

**Problem:** App description doesn't match functionality.

**Solution:**
1. Update description to accurately reflect app features
2. Remove any exaggerated claims
3. Resubmit

### Issue: "App rejected: Privacy policy missing"

**Problem:** Privacy policy URL not provided or not accessible.

**Solution:**
1. Create privacy policy at https://www.privacypolicygenerator.info/
2. Host on your website
3. Add URL to App Store Connect
4. Resubmit

## Runtime Issues

### Issue: "App crashes on startup"

**Problem:** JavaScript error or missing dependency.

**Solution:**
```bash
# Check logs
npx expo start

# Look for errors in console
# Fix the errors
# Build and submit new version
```

### Issue: "Images not loading"

**Problem:** Image paths incorrect or images missing.

**Solution:**
1. Check image paths in code
2. Ensure images exist in assets folder
3. Use require() for local images:
```javascript
<Image source={require('./assets/images/logo.png')} />
```

### Issue: "Contact form not working"

**Problem:** Email client not opening.

**Solution:**
The app uses `Linking.openURL('mailto:...')` which should work on all devices. If not:
1. Test on real device (not simulator)
2. Ensure device has email app configured
3. Consider adding alternative contact methods

### Issue: "Phone numbers not dialing"

**Problem:** Phone dialing not working.

**Solution:**
1. Test on real device (simulators can't make calls)
2. Check phone number format:
```javascript
Linking.openURL('tel:+442089148122')
```

## Performance Issues

### Issue: "App is slow to load"

**Problem:** Large images or too many components.

**Solution:**
1. Optimize images (compress, resize)
2. Use lazy loading for images
3. Reduce initial bundle size

### Issue: "App uses too much memory"

**Problem:** Memory leaks or large assets.

**Solution:**
1. Optimize images
2. Remove unused dependencies
3. Use React.memo for expensive components
4. Clean up event listeners

## Update Issues

### Issue: "OTA update not working"

**Problem:** Update not reaching users.

**Solution:**
```bash
# Ensure you're publishing to correct branch
eas update --branch production --message "Update message"

# Check update status
eas update:list

# Verify users are on correct channel
```

### Issue: "Update causes app to crash"

**Problem:** Breaking change in update.

**Solution:**
1. Roll back update:
```bash
eas update:rollback
```
2. Fix the issue
3. Test thoroughly
4. Publish new update

## Network Issues

### Issue: "API calls failing"

**Problem:** Network requests not working.

**Solution:**
1. Check internet connection
2. Verify API endpoints
3. Check CORS settings (for web)
4. Add error handling:
```javascript
try {
  const response = await fetch(url);
  // handle response
} catch (error) {
  console.error('Network error:', error);
  Alert.alert('Error', 'Please check your internet connection');
}
```

## Platform-Specific Issues

### iOS Specific

#### Issue: "App not appearing in TestFlight"

**Solution:**
1. Check build is marked for TestFlight in App Store Connect
2. Add testers in App Store Connect
3. Wait for Apple's processing (can take 10-30 minutes)

#### Issue: "Push notifications not working on iOS"

**Solution:**
1. Ensure push notification capability is enabled
2. Request permissions in app
3. Test on real device (not simulator)

### Android Specific

#### Issue: "App not installing on Android"

**Solution:**
1. Enable "Install from unknown sources" in device settings
2. Check minimum SDK version in app.json
3. Ensure device meets requirements

#### Issue: "Back button not working properly"

**Solution:**
1. Implement proper navigation handling
2. Use React Navigation's back handler
3. Test on physical Android device

## Getting Help

If you're still stuck after trying these solutions:

### 1. Check EAS Build Logs
```bash
eas build:list
# Click on the build ID to view detailed logs
```

### 2. Search Expo Forums
- URL: https://forums.expo.dev/
- Search for your error message
- Post a new question with:
  - Error message
  - Build logs
  - app.json configuration
  - Steps to reproduce

### 3. Check Expo Documentation
- URL: https://docs.expo.dev/
- Comprehensive guides and API references

### 4. Join Expo Discord
- URL: https://chat.expo.dev/
- Real-time help from community

### 5. Check GitHub Issues
- Expo: https://github.com/expo/expo/issues
- React Native: https://github.com/facebook/react-native/issues

## Useful Debugging Commands

```bash
# Check Expo CLI version
expo --version

# Check EAS CLI version
eas --version

# Check Node version
node --version

# Check npm version
npm --version

# View build logs
eas build:view [BUILD_ID]

# List all builds
eas build:list

# View credentials
eas credentials

# Check project configuration
eas config

# Clear Metro cache
npx expo start --clear

# Reset project
rm -rf node_modules
npm install
npx expo start --clear
```

## Prevention Tips

1. **Test thoroughly before building:**
   - Test on iOS simulator
   - Test on Android emulator
   - Test on real devices if possible

2. **Keep dependencies updated:**
   ```bash
   npx expo install --check
   ```

3. **Use version control:**
   - Commit working code before making changes
   - Create branches for new features

4. **Monitor build status:**
   - Check EAS dashboard regularly
   - Set up email notifications

5. **Read error messages carefully:**
   - Error messages usually tell you exactly what's wrong
   - Google the error message if unclear

6. **Keep backups:**
   - Backup your keystore (Android)
   - Backup your certificates (iOS)
   - Keep a copy of working builds

---

**Still having issues?** 

Don't hesitate to reach out to the Expo community or check the official documentation. The Expo team and community are very helpful!

Remember: Every developer faces these issues. You're not alone! 💪
